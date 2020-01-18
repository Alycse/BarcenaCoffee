import { Component, OnInit } from '@angular/core';

import { Pantry } from './../../_interfaces/pantry.model';

import { RepositoryService } from './../../shared/services/repository.service';
import { PantrySettingsService } from './../../shared/services/pantry-settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantries-view',
  templateUrl: './pantries-view.component.html',
  styleUrls: ['./pantries-view.component.css']
})

export class PantriesViewComponent implements OnInit {

  public pantries: Pantry[];
  restockingPantryIndex: number = 0;

  constructor(private repository: RepositoryService, private pantrySettings: PantrySettingsService, private router: Router) { }

  ngOnInit() {
    this.getAllPantries();
  }

  public getAllPantries(){
    let apiAddress: string = "api/pantry";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.pantries = result as Pantry[];
    })
  }

  public getIngredientContainerAmtFromUnits(units: number){
    return this.pantrySettings.getIngredientContainerAmtFromUnits(units);
  }

  public showStockGraph(pantryId){
    this.router.navigate([`pantries/${pantryId}`]);
  }

  public restock(pantryIndex: number){
    this.restockingPantryIndex = pantryIndex;
    $('#restock-modal').modal();
  }

}
