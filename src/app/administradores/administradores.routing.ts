import { Routes } from '@angular/router';
import { AdministradoresComponent } from './administradores.component';


export const AdministradoresRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'administradores',
        component: AdministradoresComponent
    }]
}
];
