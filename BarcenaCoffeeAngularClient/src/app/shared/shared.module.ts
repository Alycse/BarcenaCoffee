import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { ReactiveFormsModule } from '@angular/forms';

import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { RestockModalComponent } from './modals/restock-modal/restock-modal.component';
 
@NgModule({
    imports: [
        CommonModule,
        GoogleChartsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SuccessModalComponent,
        ErrorModalComponent,
        RestockModalComponent
    ],
    exports: [
        SuccessModalComponent,
        ErrorModalComponent,
        RestockModalComponent
    ]
})
export class SharedModule { }