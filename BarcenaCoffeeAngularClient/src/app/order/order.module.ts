import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { CoffeeSelectComponent } from './coffee-select/coffee-select.component';
 
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: CoffeeSelectComponent }
        ])
    ],
    declarations: [
        CoffeeSelectComponent
    ]
})
export class OrderModule { }