import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { RelatorioClienteComponent } from './relatorio-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorDisplayComponent } from '../forms/validationforms/field-error-display/field-error-display.component';
import { BrMaskerModule } from 'br-mask';
import { RouterModule } from '@angular/router';
import { RelatorioClienteRoutes } from './relatorio-cliente.routing';

@NgModule({
  declarations: [RelatorioClienteComponent],
  imports: [
    RouterModule.forChild(RelatorioClienteRoutes),
    CommonModule,
    MdModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FieldErrorDisplayComponent,
    BrMaskerModule,
  ],
})
export class RelatorioClienteModule {}

