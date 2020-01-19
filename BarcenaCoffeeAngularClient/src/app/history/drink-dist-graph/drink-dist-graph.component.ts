import { Component, OnInit } from '@angular/core';

import { Order } from './../../_interfaces/order.model';
import { Drink } from './../../_interfaces/drink.model';

import { RepositoryService } from './../../shared/services/repository.service';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';

@Component({
  selector: 'app-drink-dist-graph',
  templateUrl: './drink-dist-graph.component.html',
  styleUrls: ['./drink-dist-graph.component.css']
})
export class DrinkDistGraphComponent implements OnInit {

  orders: Order[];
  drinks: Drink[];

  itemLoaded: boolean = false;

  public title: string = "Distribution of Drinks Ordered";
  public type: string = "ColumnChart";
  public data: [string, number][];
  public columnNames: string[] = ["Drink Name", "Number of Times Ordered"];
  public width: number = 700;
  public height: number = 400;
  
  public errorMessage: string;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getAllOrders();
    this.getAllDrinks();
  }

  public getDrinkDistData(){
    this.data = [];
    for (var i = 0; i < this.drinks.length; i++) {
      this.data[i] = [this.drinks[i].drinkName, 0];
    }
    for (var i = 0; i < this.orders.length; i++) {
      this.data[this.drinks.findIndex(d => d.id == this.orders[i].drinkId)][1]++;
    }
  }

  public getAllOrders(){
    let apiAddress: string = "api/order";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.orders = result as Order[];
      if(this.itemLoaded){
        this.getDrinkDistData();
      }else{
        this.itemLoaded = true;
      }
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
      if(this.itemLoaded){
        this.getDrinkDistData();
      }else{
        this.itemLoaded = true;
      }
    },(error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
    )
  }

}
