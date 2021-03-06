import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';

import { OrderHistoryComponent } from './order-history/order-history.component';
import { DrinkDistGraphComponent } from './drink-dist-graph/drink-dist-graph.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        GoogleChartsModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: OrderHistoryComponent },
            { path: 'p-filter/all', redirectTo: '', pathMatch: 'full' },
            { path: 'p-filter/:id', component: OrderHistoryComponent },
            { path: 'graph', component: DrinkDistGraphComponent }
        ])
    ],
    declarations: [
        OrderHistoryComponent,
        DrinkDistGraphComponent
    ]
})
export class HistoryModule { }