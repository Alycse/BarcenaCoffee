import { Component, OnInit } from '@angular/core';

import { Pantry } from './../../_interfaces/pantry.model';

import { RepositoryService } from './../../shared/services/repository.service';
import { PantrySettingsService } from './../../shared/services/pantry-settings.service';

@Component({
  selector: 'app-pantries-view',
  templateUrl: './pantries-view.component.html',
  styleUrls: ['./pantries-view.component.css']
})

export class PantriesViewComponent implements OnInit {

  public pantries: Pantry[];

  constructor(private repository: RepositoryService, private pantrySettings: PantrySettingsService) { }

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

  public getUnitsFromIngredientContainer(ingredientContainerAmount: number){
    return this.pantrySettings.getUnitsFromIngredientContainer(ingredientContainerAmount);
  }

}
