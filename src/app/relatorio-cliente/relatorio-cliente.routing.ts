import { Routes } from '@angular/router';
import { ClienteByIdGuard } from '../core/guards/cliente-by-id.guard';
import { RelatorioClienteComponent } from './relatorio-cliente.component';


export const RelatorioClienteRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: RelatorioClienteComponent
    }]
}
];
