import { Component, OnInit } from '@angular/core';

import { Drink } from './../../_interfaces/drink.model';
import { Office } from './../../_interfaces/office.model';
import { Pantry } from './../../_interfaces/pantry.model';
import { CreationOrder } from '../../_interfaces/creation-order.model';

import { RepositoryService } from './../../shared/services/repository.service';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { DatePipe } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee-select',
  templateUrl: './coffee-select.component.html',
  styleUrls: ['./coffee-select.component.css']
})
export class CoffeeSelectComponent implements OnInit {

  public offices: Office[];
  public drinks: Drink[];
  public pantries: Pantry[];

  public selectedOfficeIndex: number = -1;
  public selectedDrinkIndex: number = -1;
  public selectedPantryIndex: number = -1;

  public successMessage: string;
  public errorMessage: string;

  constructor(private repository: RepositoryService, private datePipe: DatePipe, 
    private router: Router, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getAllDrinks();
    this.getAllOffices();
  }

  public getAllOffices(){
    let apiAddress: string = "api/office";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.offices = result as Office[];
      this.selectOffice(0);
    },(error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
    )
  }

  public getAllPantries(){
    let apiAddress: string = "api/pantry";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.pantries = result as Pantry[];
      this.selectPantry(0);
    },(error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
    )
  }

  public getAllPantriesByOfficeId(officeId: string){
    let apiAddress: string = `api/pantry/${officeId}/office`;
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.pantries = result as Pantry[];
      this.selectPantry(0);
    },(error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
    )
  }

  public getAllDrinks(){
    let apiAddress: string = "api/drink";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.drinks = result as Drink[];
      this.selectDrink(0);
    },(error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
    )
  }

  public selectDrink(index: number){
    this.selectedDrinkIndex = index;
  }

  public selectPantry(index: number){
    this.selectedPantryIndex = index;
  }

  public selectOffice(index: number){
    this.selectedOfficeIndex = index;
    this.getAllPantriesByOfficeId(this.offices[index].id);
  }

  public orderSelectedDrink(){
    if(this.isOrderAllowed()){
      let now = new Date();
      let order: CreationOrder = {
        drinkId: this.drinks[this.selectedDrinkIndex].id,
        pantryId: this.pantries[this.selectedPantryIndex].id,
        orderDate: now
      }

      let apiAddress = 'api/order';
      this.repository.create(apiAddress, order)
        .subscribe(res => {
          this.consumePantryStock(this.pantries[this.selectedPantryIndex], this.drinks[this.selectedDrinkIndex]);
        },(error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
    }
  }

  public isOrderAllowed(){
    return (this.selectedDrinkIndex >= 0 && this.selectedPantryIndex >= 0 && 
      this.selectedDrinkIndex < this.drinks.length && this.selectedPantryIndex < this.pantries.length);
  }

  public consumePantryStock(pantry: Pantry, drink: Drink){
    let isOutOfStock: boolean = false;
    
    if(pantry.coffeeBeanUnits >= drink.coffeeBeanUnits){
      pantry.coffeeBeanUnits = pantry.coffeeBeanUnits - drink.coffeeBeanUnits;
    }else{
      this.errorMessage = pantry.pantryName + " is out of stock of coffee beans!";
      isOutOfStock = true;
    }
    if(pantry.milkUnits >= drink.milkUnits){
      pantry.milkUnits = pantry.milkUnits - drink.milkUnits;
    }else{
      this.errorMessage = pantry.pantryName + " is out of stock of milk!";
      isOutOfStock = true;
    }
    if(pantry.sugarUnits >= drink.sugarUnits){
      pantry.sugarUnits = pantry.sugarUnits - drink.sugarUnits;
    }else{
      this.errorMessage = pantry.pantryName + " is out of stock of sugar!";
      isOutOfStock = true;
    }

    if(isOutOfStock){
      $('#error-modal').modal();
      return;
    }else{
      let apiAddress = `api/pantry/${pantry.id}`;
      this.repository.update(apiAddress, pantry)
        .subscribe(res => {
          let office: Office = this.offices.find(o => o.id == pantry.officeId);
          this.successMessage = drink.drinkName + " was successfully ordered at " + office.officeName + " | " + pantry.pantryName + "!";
          $('#success-modal').modal();
        },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
    }
  }
  
  public onOrderSuccess(){
    this.redirectToOrderHistory();
  }

  public redirectToOrderHistory(){
    this.router.navigate(['/history']);
  }

  public hasChosen(){
    return this.selectedDrinkIndex != -1;
  }

}
