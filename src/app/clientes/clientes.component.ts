import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ClienteService } from "../core/services/cliente.service";
import * as _ from "lodash";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
})
export class ClientesComponent implements OnInit {
  dataSource: MatTableDataSource<ClienteData>;
  serchField = "";

  displayedColumns = [
    "empresa",
    "login",
    "ultimoAcesso",
    "adwords",
    "consultoria",
    "whatsappAtivo",
    "telefone",
    "actions",
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private clienteService:ClienteService) {
    this.carregarTabela()
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  sortData(event){
    console.log(event)
  }

  private initPaginate() {
    if (this.dataSource != undefined) {
      this.dataSource["paginator"] = this.paginator;
      this.dataSource["sort"] = this.sort;
    }
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.initPaginate();
  }

  private carregarTabela() {
    //essa declaração carrega ai iniciar o pag sozinho
     this.clienteService.getAllClientes().subscribe((data) => {
      const users: ClienteData[] = [];
      _.each(data, item =>{
        users.push(dtoToClienteData(item));
      });
      this.dataSource = new MatTableDataSource(users);
      this.initPaginate();
    });
  }

  
}

function dtoToClienteData(dto): ClienteData {
  return {
    id: dto.id,
    nomeEmpresa: dto.nomeEmpresa,
    login: dto.login,
    ultimoAcesso: dto.ultimoAcesso,
    adwords: dto.adwords,
    consultoria: dto.consultoria,
    whatsappAtivo: dto.whatsappAtivo,
    telefone: dto.telefone
  };
}

export interface ClienteData {
  id:String;
  nomeEmpresa: String;
  login: String;
  ultimoAcesso: String;
  adwords: String;
  consultoria: String;
  whatsappAtivo: String;
  telefone: String;
}
