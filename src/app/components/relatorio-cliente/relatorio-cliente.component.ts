import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ActivatedRoute } from "@angular/router";
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

  constructor(
    private clienteService: ClienteService,
    private elementosTelaService: ElementosTelaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carregarDados();
    this.carregarCombos();
  }

  private carregarDados() {
    var idCliente = this.route.snapshot.params["idCliente"];
    if(idCliente != null){
      this.clienteService.getClienteById(idCliente).subscribe((data) => {
        this.cliente = buildCliente(data)
  
        if (data["adwords"] != "") {
          var costumerId = data["adwords"].replace(/-/g, ""); //removendo os - "traço"
  
          this.clienteService.getMetrics(costumerId).subscribe((metric) => {
            this.cliente.metric = buildMetric(metric);;
          });
        }
      });
    }
    
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

