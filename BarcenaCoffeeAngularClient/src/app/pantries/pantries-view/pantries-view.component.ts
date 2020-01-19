import { Component, OnInit } from '@angular/core';

import { Pantry } from './../../_interfaces/pantry.model';

import { RepositoryService } from './../../shared/services/repository.service';
import { PantrySettingsService } from './../../shared/services/pantry-settings.service';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pantries-view',
  templateUrl: './pantries-view.component.html',
  styleUrls: ['./pantries-view.component.css']
})

export class PantriesViewComponent implements OnInit {

  public pantries: Pantry[];
  restockingPantryIndex: number = 0;
  public pantryIdToDelete: string;

  public confirmationMessage: string;
  public confirmationCancelButtonText: string;
  public confirmationOkButtonText: string;

  public errorMessage: string;

  constructor(private repository: RepositoryService, private pantrySettings: PantrySettingsService, 
    private router: Router, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getAllPantries();
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

  public showDeletePantryConfirmation(pantry: Pantry){
    this.confirmationMessage = "Are you sure you want to delete " + pantry.pantryName + "?";
    this.confirmationOkButtonText = "Yes";
    this.confirmationCancelButtonText = "No";
    this.pantryIdToDelete = pantry.id;
    $('#confirmation-modal').modal();
  }

  public deletePantry(){
    let deleteAddress: string = `api/pantry/${this.pantryIdToDelete}`;
    this.repository.delete(deleteAddress)
      .subscribe(res => {
        window.location.reload();
      },(error => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
      )
      $('#create-pantry-modal').modal('hide')
  }

  public showCreatePantryModal(){
    $('#create-pantry-modal').modal();
  }

}
