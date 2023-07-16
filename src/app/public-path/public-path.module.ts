import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RelatorioClienteComponent } from "../components/relatorio-cliente/relatorio-cliente.component";
import { RouterModule } from "@angular/router";
import { PublicPathRoutes } from "./public-path.routing";
import { PublicRelatorioClienteComponent } from './public-relatorio-cliente/public-relatorio-cliente.component';

@NgModule({
  declarations: [
    PublicRelatorioClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PublicPathRoutes),
    RelatorioClienteComponent,
  ],
  exports: [],
})
export class PublicPathModule {}
