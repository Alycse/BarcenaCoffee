import { Component, OnInit } from '@angular/core';

import { Office } from './../../_interfaces/office.model';
import { Order } from './../../_interfaces/order.model';
import { Drink } from './../../_interfaces/drink.model';
import { Pantry } from './../../_interfaces/pantry.model';

import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { RepositoryService } from './../../shared/services/repository.service';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  public offices: Office[];
  public orders: Order[];
  public drinks: Drink[];
  public pantries: Pantry[];

  public drinkDist: [string, number][];

  selectedPantryId: string = "all";

  public errorMessage: string;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, 
    private router: Router, private activeRoute: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit() {
    this.getAllDrinks();
    this.getAllPantries();
    this.getAllOffices();
    
    let selectedPantryId: string = this.activeRoute.snapshot.params['id'];
    if(selectedPantryId != null){
      this.selectPantry(selectedPantryId);
    }else{
      this.selectPantry("all");
    }
  }

  public getAllOrders(){
    let apiAddress: string = "api/order";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.orders = result as Order[];
    },(error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
    )
  }

  public getAllOffices(){
    let apiAddress: string = "api/office";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.offices = result as Office[];
    },(error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
    )
  }

  public getAllOrdersByPantryId(pantryId: string){
    let apiAddress: string = `api/order/${pantryId}/pantry`;
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.orders = result as Order[];
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
    },(error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
    )
  }

  public getDrinkNameById(id: string){
    let drink: Drink = this.drinks.find(d => d.id == id);
    if(drink != null){
      return drink.drinkName;
    }else{
      return "";
    }
  }

  public getOfficeNameByPantryId(id: string){
    let pantry: Pantry = this.pantries.find(p => p.id == id);
    if(pantry != null){
      let office: Office = this.offices.find(o => o.id == pantry.officeId);
      if(office != null){
        return office.officeName;
      }else{
        return "";
      }
    }
  }

  public getPantryNameById(id: string){
    let pantry: Pantry = this.pantries.find(p => p.id == id);
    if(pantry != null){
      return pantry.pantryName;
    }else{
      return "";
    }
  }

  public onChangePantry(pantryId: string){
    this.selectPantry(pantryId);
  }

  public selectPantry(pantryId: string){
    this.selectedPantryId = pantryId;
    if(pantryId == "all"){
      this.getAllOrders();
    }else{
      this.getAllOrdersByPantryId(pantryId);
    }
    this.router.navigate([`history/p-filter/${pantryId}`]);
  }

  public navigateToOrderGraph(){
    window.location.href = "history/graph";
  }

}
