import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { FieldErrorDisplayComponent } from '../forms/validationforms/field-error-display/field-error-display.component';
import { BrMaskerModule } from 'br-mask';
import { ClientesComponent } from './clientes.component';
import { ClientesRoutes } from './clientes.routing';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';

@NgModule({
  declarations: [ClientesComponent, DadosClienteComponent],
  imports: [
    RouterModule.forChild(ClientesRoutes),
    CommonModule,
    FormsModule,
    MdModule,
    MaterialModule,
    ReactiveFormsModule,
    FieldErrorDisplayComponent,
    BrMaskerModule,
  ],
})
export class ClientesModule {}
