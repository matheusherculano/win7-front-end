import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/core/services/cliente.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css']
})
export class DadosClienteComponent implements OnInit {
  idCliente: any;

  divs = [
    { text: 'Div 1' },
    { text: 'Div 2' },
    { text: 'Div 3' },
    { text: 'Div 4' },
    { text: 'Div 5' },
    { text: 'Div 6' },
    { text: 'Div 7' },
    { text: 'Div 8' },
    { text: 'Div 9' },
    { text: 'Div 10' }
  ];
  

  constructor(private route: ActivatedRoute, private router: Router, private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.idCliente = this.route.snapshot.params['idCliente'];

    this.carregarCliente(this.idCliente);

  }

  private carregarCliente(idCliente:number) { // carrego a partir do id da pathvariable
    //essa declaração carrega ai iniciar o pag sozinho
     this.clienteService.getClienteById(idCliente).subscribe((data) => {
      if(data == null){ // se for um cliente que não existe retorna para a tela anterior.
        Swal.fire({
          title: 'Algo está errado!',
          text: 'O Cliente que você tentou acessar não está disponível.',
          icon: 'warning',
          confirmButtonText: 'Ok',
          customClass:{
            confirmButton: "btn btn-success",
          },
          buttonsStyling: false
      }).then((result) => {
        this.router.navigate(['clientes']);
      })
      }
      console.log(data)
    });
  }

}
