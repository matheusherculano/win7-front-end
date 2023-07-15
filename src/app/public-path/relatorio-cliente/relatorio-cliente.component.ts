import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClienteService } from "src/app/core/services/cliente.service";

@Component({
  standalone: true,
  selector: "app-relatorio-cliente",
  templateUrl: "./relatorio-cliente.component.html",
  styleUrls: ["./relatorio-cliente.component.css"],
})
export class RelatorioClienteComponent implements OnInit {
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

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  private carregarDados() {
    var idCliente = this.route.snapshot.params["idCliente"];
    this.clienteService.getClienteById(idCliente).subscribe((data) => {
      console.log(data);
      this.cliente = buildCliente(data)

      if (data["adwords"] != "") {
        var costumerId = data["adwords"].replace(/-/g, ""); //removendo os - "traço"

        this.clienteService.getMetrics(costumerId).subscribe((metric) => {
          console.log("metric", metric);
          this.cliente.metric = buildMetric(metric);;
        });
      }
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

