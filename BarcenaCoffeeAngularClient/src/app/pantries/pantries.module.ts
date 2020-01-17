import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { PantriesViewComponent } from './pantries-view/pantries-view.component';
 
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: PantriesViewComponent }
        ])
    ],
    declarations: [
        PantriesViewComponent
    ]
})
export class PantriesModule { }