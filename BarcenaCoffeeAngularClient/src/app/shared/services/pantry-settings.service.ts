import { Injectable } from '@angular/core';

const unitsPerIngredientContainer: number = 15;

@Injectable({
  providedIn: 'root'
})

export class PantrySettingsService {

  constructor() { }

  public getUnitsFromIngredientContainer(ingredientContainerAmount: number) {
    return Math.ceil(ingredientContainerAmount/unitsPerIngredientContainer);
  }
}
