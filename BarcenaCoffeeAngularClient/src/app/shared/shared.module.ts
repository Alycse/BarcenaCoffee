import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';

import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
 
@NgModule({
    imports: [
        CommonModule,
        GoogleChartsModule
    ],
    declarations: [
        SuccessModalComponent,
        ErrorModalComponent
    ],
    exports: [
        SuccessModalComponent,
        ErrorModalComponent
    ]
})
export class SharedModule { }