import { CommonModule, LocationStrategy } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router  } from "@angular/router";
import * as _ from "lodash";
import { MaterialModule } from "src/app/app.module";
import { ClienteService } from "src/app/core/services/cliente.service";
import { ElementosTelaService } from "src/app/core/services/elementos-tela.service";

interface ComboBox {
  value: string;
  label: string;
}
@Component({
  standalone: true,
  selector: "app-relatorio-cliente",
  templateUrl: "./relatorio-cliente.component.html",
  styleUrls: ["./relatorio-cliente.component.css"],
  imports: [MaterialModule, ReactiveFormsModule, CommonModule]
})
export class RelatorioClienteComponent implements OnInit {
  @Input() showFilters: boolean;

  idCliente = this.activatedRoute.snapshot.params["idCliente"];
  cliente = {
    nomeEmpresa:"",
    metric:{
      clicks:"",
      cpc:"",
      custoTotal:"",
      impression:"",
      invalidClicks:""
    }
  };
  periodoSelecionado = "TODAY";
  periodoList: ComboBox[] = [];
  linkPublicRelatorioCliente = "asd";
  urlCliente = "";

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
    this._snackBar.open("Link copiado!", "Ok")
  }

  private obterUrlQueryParams(){
    var queryParams = {
      periodo: null,
      public: false
    };

    this.activatedRoute.queryParams.subscribe(params => {
      queryParams.periodo = params['periodo'];
      queryParams.public = params['public'];
    });

    return queryParams;
  }

  private carregarDados(periodo) {
    if(this.idCliente != null){
      if(this.obterUrlQueryParams().public){ //decidindo se pega o periodo da variavel de URL em caso de link public ou não
        this.requisicoesHTTP(this.idCliente, this.obterUrlQueryParams().periodo);
      }else{
        this.requisicoesHTTP(this.idCliente, periodo);
      }
    }
    this.montarUrlCliente(periodo);

  }

  private montarUrlCliente(periodo){
    var currentUrl =  window.location.href;
    currentUrl = currentUrl.split('#')[0]; //removendo activeRoute atual
    currentUrl = currentUrl + "#/public/relatorio-cliente/"+this.idCliente+"?periodo="+periodo+"&public=true";
    this.urlCliente = currentUrl;
  }

  private requisicoesHTTP(idCliente, periodo) {
    this.clienteService.getClienteById(idCliente).subscribe((data) => {
      this.cliente = buildCliente(data);

      if (data["adwords"] != "") {
        var costumerId = data["adwords"].replace(/-/g, ""); //removendo os - "traço"

        this.clienteService.getMetrics(costumerId, periodo).subscribe((metric) => {
          this.cliente.metric = buildMetric(metric);;
        });
      }
    });
  }

  private carregarCombos(){
    this.elementosTelaService.getPeriodoAdsList().subscribe(data=>{
      _.each(data, item=>{
        var comboItem:ComboBox = {
          value: item['value'],
          label: item['label']
        }
        this.periodoList.push(comboItem);
      });
    });
  }
}

function buildCliente(data) {
  return {
    id:data.id,
    nome:data.nome,
    nomeEmpresa:data.nomeEmpresa,
    metric:{
      clicks:"",
      cpc:"",
      custoTotal:"",
      impression:"",
      invalidClicks:""
    }
  };
}

function buildMetric(metric){
  return {
    clicks:metric.clicks,
    cpc:metric.cpc,
    custoTotal:metric.custoTotal,
    impression:metric.impression,
    invalidClicks:metric.invalidClicks
  }
}

