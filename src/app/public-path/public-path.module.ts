import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { RelatorioClienteComponent } from './relatorio-cliente/relatorio-cliente.component';
import { RouterModule } from '@angular/router';
import { PublicPathRoutes } from './public-path.routing';



@NgModule({
  declarations: [
    RelatorioClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PublicPathRoutes)
  ]
})
export class PublicPathModule { }
