import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';


export const ClientesRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ClientesComponent
    }]
}
];
