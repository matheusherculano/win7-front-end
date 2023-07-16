import { Routes } from '@angular/router';
import { OnlyNumbersGuard } from '../core/guards/only-numbers.guard';
import { PublicRelatorioClienteComponent } from './public-relatorio-cliente/public-relatorio-cliente.component';

export const PublicPathRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'relatorio-cliente/:idCliente',
            component: PublicRelatorioClienteComponent,
            canActivate: [OnlyNumbersGuard] //guard para deixar somente numeros na pathvariable
        }
    ]
    }
];
