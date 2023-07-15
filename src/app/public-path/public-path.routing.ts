import { Routes } from '@angular/router';
import { RelatorioClienteComponent } from './relatorio-cliente/relatorio-cliente.component';

export const PublicPathRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'relatorio-cliente',
            component: RelatorioClienteComponent
        }
    ]
    }
];
