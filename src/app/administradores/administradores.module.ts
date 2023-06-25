import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { AdministradoresComponent } from './administradores.component';
import { AdministradoresRoutes } from './administradores.routing';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdministradoresRoutes),
        FormsModule,
        MdModule,
        MaterialModule
    ],
    declarations: [AdministradoresComponent]
})

export class AdministradoresModule {}
