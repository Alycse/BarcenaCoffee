import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
 
@NgModule({
    imports: [
        CommonModule
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