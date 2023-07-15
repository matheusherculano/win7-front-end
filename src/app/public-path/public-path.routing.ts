import { Routes } from '@angular/router';
import { RelatorioClienteComponent } from './relatorio-cliente/relatorio-cliente.component';
import { OnlyNumbersGuard } from '../core/guards/only-numbers.guard';

export const PublicPathRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'relatorio-cliente/:idCliente',
            component: RelatorioClienteComponent,
            canActivate: [OnlyNumbersGuard] //guard para deixar somente numeros na pathvariable
        }
    ]
    }
];
