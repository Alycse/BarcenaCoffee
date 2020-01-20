import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { ReactiveFormsModule } from '@angular/forms';

import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { RestockModalComponent } from './modals/restock-modal/restock-modal.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { CreatePantryModalComponent } from './modals/create-pantry-modal/create-pantry-modal.component';
import { CreateOfficeModalComponent } from './modals/create-office-modal/create-office-modal.component';
 
@NgModule({
    imports: [
        CommonModule,
        GoogleChartsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SuccessModalComponent,
        ErrorModalComponent,
        RestockModalComponent,
        ConfirmationModalComponent,
        CreatePantryModalComponent,
        CreateOfficeModalComponent
    ],
    exports: [
        SuccessModalComponent,
        ErrorModalComponent,
        RestockModalComponent,
        ConfirmationModalComponent,
        CreatePantryModalComponent,
        CreateOfficeModalComponent
    ]
})
export class SharedModule { }