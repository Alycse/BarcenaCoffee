import { Component, OnInit } from '@angular/core';

import { Drink } from './../../_interfaces/drink.model';
import { Pantry } from './../../_interfaces/pantry.model';
import { CreationOrder } from '../../_interfaces/creation-order.model';

import { RepositoryService } from './../../shared/services/repository.service';
import { DatePipe } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee-select',
  templateUrl: './coffee-select.component.html',
  styleUrls: ['./coffee-select.component.css']
})
export class CoffeeSelectComponent implements OnInit {

  public drinks: Drink[];
  public pantries: Pantry[];

  public selectedDrinkIndex: number = -1;
  public selectedPantryIndex: number = -1;

  constructor(private repository: RepositoryService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {
    this.getAllDrinks();
    this.getAllPantries();
  }

  public getAllPantries(){
    let apiAddress: string = "api/pantry";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.pantries = result as Pantry[];
      this.selectPantry(0);
    })
  }

  public getAllDrinks(){
    let apiAddress: string = "api/drink";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.drinks = result as Drink[];
      this.selectDrink(0);
    })
  }

  public selectDrink(index: number){
    this.selectedDrinkIndex = index;
  }

  public selectPantry(index: number){
    this.selectedPantryIndex = index;
  }

  public orderSelectedDrink(){
    let now = new Date();
    let order: CreationOrder = {
      drinkId: this.drinks[this.selectedDrinkIndex].id,
      pantryId: this.pantries[this.selectedPantryIndex].id,
      orderDate: now
    }

    let apiUrl = 'api/order';
    this.repository.create(apiUrl, order)
      .subscribe(res => {
        $('#success-modal').modal();
      }
    )
  }

  public redirectToOrderHistory(){
    this.router.navigate(['/history']);
  }

  public hasChosen(){
    return this.selectedDrinkIndex != -1;
  }

}
