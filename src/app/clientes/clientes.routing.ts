import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { OnlyNumbersGuard } from '../core/guards/only-numbers.guard';


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
      canActivate: [OnlyNumbersGuard] //guard para deixar somente numeros na pathvariable
  }]
}
];
