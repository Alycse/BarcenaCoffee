import { Component, OnInit } from '@angular/core';

import { Pantry } from './../../_interfaces/pantry.model';

import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from './../../shared/services/repository.service';
import { PantrySettingsService } from './../../shared/services/pantry-settings.service';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';

@Component({
  selector: 'app-pantry-stock-graph',
  templateUrl: './pantry-stock-graph.component.html',
  styleUrls: ['./pantry-stock-graph.component.css']
})
export class PantryStockGraphComponent implements OnInit {

  pantry: Pantry;

  public title: string;
  public type: string = "ColumnChart";
  public data: [string, number][];
  public columnNames: string[] = ["Ingredient", "Amount"];
  public width: number = 700;
  public height: number = 400;

  public errorMessage: string;

  constructor(private repository: RepositoryService, private router: Router, 
    private activeRoute: ActivatedRoute, private pantrySettings: PantrySettingsService, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getPantry(this.activeRoute.snapshot.params['id']);
  }

  public getPantry(pantryId: string){
    let apiAddress: string = `api/pantry/${pantryId}`;
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.pantry = result as Pantry;
      console.log(this.pantry.coffeeBeanUnits);
      this.title = `${this.pantry.pantryName} Stock`;
      this.getPantryStockData();
    },(error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
    )
  }

  public getPantryStockData(){
    this.data = [["Coffee Bean Bags", this.pantrySettings.getIngredientContainerAmtFromUnits(this.pantry.coffeeBeanUnits)], 
      ["Sugar Packs", this.pantrySettings.getIngredientContainerAmtFromUnits(this.pantry.sugarUnits)], 
      ["Milk Cartons", this.pantrySettings.getIngredientContainerAmtFromUnits(this.pantry.milkUnits)], 
    ];
  }

}
