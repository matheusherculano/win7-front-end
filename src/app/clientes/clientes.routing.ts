import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { ClienteByIdGuard } from '../core/guards/cliente-by-id.guard';


export const ClientesRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ClientesComponent
    },
    {
      path: ':idCliente',
      component: DadosClienteComponent,
      canActivate: [ClienteByIdGuard]
  }]
}
];
