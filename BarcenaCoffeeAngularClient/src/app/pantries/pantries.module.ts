import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GoogleChartsModule } from 'angular-google-charts';

import { PantriesViewComponent } from './pantries-view/pantries-view.component';
import { PantryStockGraphComponent } from './pantry-stock-graph/pantry-stock-graph.component';
 
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        GoogleChartsModule,
        RouterModule.forChild([
            { path: '', component: PantriesViewComponent },
            { path: ':id', component: PantryStockGraphComponent }
        ])
    ],
    declarations: [
        PantriesViewComponent,
        PantryStockGraphComponent,
    ]
})
export class PantriesModule { }