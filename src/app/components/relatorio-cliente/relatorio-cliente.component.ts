import { CommonModule, JsonPipe, LocationStrategy, NgIf } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";
import { MaterialModule } from "src/app/app.module";
import { ClienteService } from "src/app/core/services/cliente.service";
import { ElementosTelaService } from "src/app/core/services/elementos-tela.service";
import { AES, enc } from "crypto-js";
import { environment } from "../../../../.history/src/environments/environment_20230717080346";
import { metricList as metricListImport } from "./lista-metricas";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

interface ComboBox {
  value: string;
  label: string;
}
@Component({
  standalone: true,
  selector: "app-relatorio-cliente",
  templateUrl: "./relatorio-cliente.component.html",
  styleUrls: ["./relatorio-cliente.component.css"],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    NgIf,
    JsonPipe,
  ],
})
export class RelatorioClienteComponent implements OnInit {
  @Input() showFilters: boolean;

  idCliente = this.activatedRoute.snapshot.params["idCliente"];
  cliente = {
    nomeEmpresa: "",
    metric: {
      clicks: "",
      cpc: "",
      custoTotal: "",
      impression: "",
      invalidClicks: "",
    },
  };
  periodoSelecionado = "TODAY";
  periodoList: ComboBox[] = [];
  linkPublicRelatorioCliente = "";
  urlCliente = "";
  metricList = metricListImport;
  metricasEscondidas = [];

  periodoDatas = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(
    private clienteService: ClienteService,
    private elementosTelaService: ElementosTelaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private locationStrategy: LocationStrategy,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carregarDados(this.periodoSelecionado);
    this.carregarCombos();
  }

  public copyText(urlCliente) {
    navigator.clipboard.writeText(urlCliente);
    this._snackBar.open("Link copiado!", "Ok");
  }

  public esconderPorItemId(itemId) {
    //esconder elementos na tela baseado no lista-metricas.ts
    const existe: boolean = !_.includes(this.metricasEscondidas, itemId);
    return existe;
  }

  public montarUrlCliente(periodo, metricasEscondidas) {
    //o objeto passado na URL é criptografado para as informações não ficarem expostas
    var currentUrl = window.location.href;
    var encryptionKey = environment.encryptionKey;
    var urlObj = {
      periodo: periodo,
      metricasEscondidas: metricasEscondidas,
    };
    var urlObjString = JSON.stringify(urlObj);
    //encodeURI remove caracteres especiais do padrão URI
    const encryptedString = encodeURIComponent(
      AES.encrypt(urlObjString, encryptionKey).toString()
    );

    currentUrl = currentUrl.split("#")[0]; //removendo activeRoute atual
    currentUrl =
      currentUrl +
      "#/public/relatorio-cliente/" +
      this.idCliente +
      "?public=true&obj=" +
      encryptedString;
    this.urlCliente = currentUrl;
  }

  private obterUrlQueryParams() { // utilizado quando é link publico para o cliente
    var urlObj = null;
    this.activatedRoute.queryParams.subscribe((params) => {
      urlObj = {
        public: params["public"],
        stringEncrypted: params["obj"],
      };
    });
    return urlObj;
  }

  private decrypt(stringEncrypted) {
    const decryptedString = AES.decrypt(
      stringEncrypted,
      environment.encryptionKey
    ).toString(enc.Utf8);
    //decode URI remove o padrão de URL caracteres especiais
    return JSON.parse(decodeURIComponent(decryptedString));
  }

  private carregarDadosPelaComboPeriodo(periodo) {
    if (periodo == "PERSONALIZADO") {
      this.carregarDados(this.periodoDatas);
    } else {
      this.carregarDados(periodo);
    }
  }

  private carregarDados(periodo) {
    if (this.idCliente != null) {
      const queryParam = this.obterUrlQueryParams();
      if (queryParam.public) {
        const urlObj = this.decrypt(queryParam.stringEncrypted); //pegando obj crypt da variavel de url
        this.requisicoesHTTP(this.idCliente, urlObj.periodo);
        this.metricasEscondidas = urlObj.metricasEscondidas;
      } else {
        this.requisicoesHTTP(this.idCliente, periodo);
        this.montarUrlCliente(periodo, this.metricasEscondidas);
      }
    }
  }

  private requisicoesHTTP(idCliente, periodo) {
    this.clienteService.getClienteById(idCliente).subscribe((data) => {
      this.cliente = buildCliente(data);

      if (data["adwords"] != "") {
        var costumerId = data["adwords"].replace(/-/g, ""); //removendo os - "traço"

        if (periodo == "PERSONALIZADO") {
          const requestMetricsDTO = this.buildRequestMetricsDTO(idCliente, costumerId, null, periodo);
          this.clienteService
            .getMetrics(requestMetricsDTO)
            .subscribe((metric) => {
              this.cliente.metric = buildMetric(metric);
            });
        }else{
          const requestMetricsDTO = this.buildRequestMetricsDTO(idCliente, costumerId, periodo, null);
          this.clienteService
            .getMetrics(requestMetricsDTO)
            .subscribe((metric) => {
              this.cliente.metric = buildMetric(metric);
            });
        }
        
      }
    });
  }

  private buildRequestMetricsDTO(clienteId, adwords, periodoAds, periodoDatas){
    const dto = {
      clienteId: clienteId,
      adwords: adwords,
      periodoAds: periodoAds,
      periodoInicial: periodoDatas != null ? periodoDatas.start : null,
      periodoFinal: periodoDatas != null ?  periodoDatas.end : null
    };
    return dto;
  }

  private carregarCombos() {
    this.elementosTelaService.getPeriodoAdsList().subscribe((data) => {
      _.each(data, (item) => {
        var comboItem: ComboBox = {
          value: item["value"],
          label: item["label"],
        };
        this.periodoList.push(comboItem);
      });
    });
  }
}

function buildCliente(data) {
  return {
    id: data.id,
    nome: data.nome,
    nomeEmpresa: data.nomeEmpresa,
    metric: {
      clicks: "",
      cpc: "",
      custoTotal: "",
      impression: "",
      invalidClicks: "",
    },
  };
}

function buildMetric(metric) {
  return {
    formularios:metric.formularios,
    whatsapp:metric.whatsapp,
    clicks: metric.ads.clicks,
    cpc: metric.ads.cpc,
    custoTotal: metric.ads.custoTotal,
    impression: metric.ads.impression,
    invalidClicks: metric.ads.invalidClicks,
  };
}
