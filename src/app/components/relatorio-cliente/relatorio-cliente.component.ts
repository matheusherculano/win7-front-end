import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ActivatedRoute } from "@angular/router";
import { MaterialModule } from "src/app/app.module";
import { ClienteService } from "src/app/core/services/cliente.service";

interface Food {
  value: string;
  viewValue: string;
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
  selectedColor = null;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carregarDados();
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

