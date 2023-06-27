import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { AdministradoresComponent } from './administradores.component';
import { AdministradoresRoutes } from './administradores.routing';
import { FieldErrorDisplayComponent } from '../forms/validationforms/field-error-display/field-error-display.component';
import { BrMaskerModule } from 'br-mask';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdministradoresRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        ReactiveFormsModule,
        FieldErrorDisplayComponent,
        BrMaskerModule
    ],
    declarations: [AdministradoresComponent]
})

export class AdministradoresModule {}
