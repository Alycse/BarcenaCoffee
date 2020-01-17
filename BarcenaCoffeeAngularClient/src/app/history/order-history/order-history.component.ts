import { Component, OnInit } from '@angular/core';

import { Order } from './../../_interfaces/order.model';
import { Drink } from './../../_interfaces/drink.model';
import { Pantry } from './../../_interfaces/pantry.model';

import { RepositoryService } from './../../shared/services/repository.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  public orders: Order[];
  public drinks: Drink[];
  public pantries: Pantry[];

  public drinkDist: [string, number][];

  constructor(private repository: RepositoryService) { }

  ngOnInit() {
    this.getDrinkDist();
    this.getAllDrinks();
    this.getAllPantries();
    this.getAllOrders();
  }

  public getAllOrders(){
    let apiAddress: string = "api/order";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.orders = result as Order[];
    })
  }

  public getAllDrinks(){
    let apiAddress: string = "api/drink";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.drinks = result as Drink[];
    })
  }

  public getAllPantries(){
    let apiAddress: string = "api/pantry";
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.pantries = result as Pantry[];
    })
  }

  public getDrinkNameById(id: string){
    return this.drinks.find(d => d.id == id).drinkName;
  }

  public getPantryNameById(id: string){
    return this.pantries.find(d => d.id == id).pantryName;
  }

  public showOrderHistoryGraph(){
    $('#graph-modal').modal();
  }

  public getDrinkDist(){
    this.drinkDist = [
      ['London', 8136000],
      ['New York', 8538000],
      ['Paris', 2244000],
      ['Berlin', 3470000],
      ['Kairo', 19500000]
    ];
  }

}
