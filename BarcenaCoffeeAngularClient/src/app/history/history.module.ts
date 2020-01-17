import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: OrderHistoryComponent }
        ])
    ],
    declarations: [
        OrderHistoryComponent
    ]
})
export class HistoryModule { }