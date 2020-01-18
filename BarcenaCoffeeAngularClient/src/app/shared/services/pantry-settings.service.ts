import { Injectable } from '@angular/core';

import { Pantry } from './../../_interfaces/pantry.model';
import { PantryConverted } from './../../_interfaces/pantry-converted.model';

const unitsPerIngredientContainer: number = 15;

@Injectable({
  providedIn: 'root'
})

export class PantrySettingsService {

  constructor() { }

  public getIngredientContainerAmtFromUnits(ingredientContainerAmount: number) {
    return Math.ceil(ingredientContainerAmount/unitsPerIngredientContainer);
  }

  public getUnitsFromIngredientContainerAmt(units: number){
    return units * unitsPerIngredientContainer;
  }

  public convertPantryToContainers(pantry: Pantry){
    let convertedPantry: PantryConverted = {
      id: pantry.id,
      pantryName: pantry.pantryName,
      coffeeBeanBagQuantity: this.getIngredientContainerAmtFromUnits(pantry.coffeeBeanUnits),
      sugarPackQuantity: this.getIngredientContainerAmtFromUnits(pantry.sugarUnits),
      milkCartonQuantity: this.getIngredientContainerAmtFromUnits(pantry.milkUnits)
    }
    return convertedPantry;
  }
}
