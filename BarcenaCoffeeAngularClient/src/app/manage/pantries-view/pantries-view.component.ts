import { Component, OnInit } from '@angular/core';

import { Pantry } from './../../_interfaces/pantry.model';
import { Office } from './../../_interfaces/office.model';

import { RepositoryService } from './../../shared/services/repository.service';
import { PantrySettingsService } from './../../shared/services/pantry-settings.service';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pantries-view',
  templateUrl: './pantries-view.component.html',
  styleUrls: ['./pantries-view.component.css']
})

export class PantriesViewComponent implements OnInit {

  public offices: Office[];
  selectedOfficeId: string;
  public officeIdToDelete: string;

  public pantries: Pantry[];
  restockingPantryIndex: number = 0;
  public pantryIdToDelete: string;

  public onOkConfirmationFunction: Function;

  public confirmationMessage: string;
  public confirmationCancelButtonText: string;
  public confirmationOkButtonText: string;

  public errorMessage: string;

  constructor(private repository: RepositoryService, private pantrySettings: PantrySettingsService, 
    private router: Router, private errorHandler: ErrorHandlerService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAllOffices();
  }

  public getPantriesByOfficeId(officeId: string){
    let apiAddress: string = `api/pantry/${officeId}/office`;
    this.repository.getData(apiAddress)
    .subscribe(result => {
      this.pantries = result as Pantry[];
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
      if(this.offices.length > 0){
        let activeOfficeId: string = this.activeRoute.snapshot.params['id'];
        if(activeOfficeId == null){
          this.router.navigate([`manage/${this.offices[0].id}`]);
        }else{
          this.selectOffice(activeOfficeId);
        }
      }
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
    this.router.navigate([`manage/p-graph/${pantryId}`]);
  }

  public restock(pantryIndex: number){
    this.restockingPantryIndex = pantryIndex;
    $('#restock-modal').modal();
  }

  public showDeletePantryConfirmation(pantryId: string){
    let pantry: Pantry = this.pantries.find(p => p.id == pantryId);
    this.confirmationMessage = "Are you sure you want to delete the pantry \"" + pantry.pantryName + "\"?";
    this.confirmationOkButtonText = "Yes";
    this.confirmationCancelButtonText = "No";
    this.pantryIdToDelete = pantry.id;
    this.onOkConfirmationFunction = this.deletePantry;
    $('#confirmation-modal').modal();
  }

  public showDeleteOfficeConfirmation(officeId: string){
    let office: Office = this.offices.find(o => o.id == officeId);
    this.confirmationMessage = "Are you sure you want to delete the office \"" + office.officeName + "\"?";
    this.confirmationOkButtonText = "Yes";
    this.confirmationCancelButtonText = "No";
    this.officeIdToDelete = office.id;
    this.onOkConfirmationFunction = this.deleteOffice;
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
      this.hideConfirmationModal();
  }

  public deleteOffice(){
    let deleteAddress: string = `api/office/${this.officeIdToDelete}`;
    this.repository.delete(deleteAddress)
      .subscribe(res => {
        this.router.navigate([`manage`]);
      },(error => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
      )
      this.hideConfirmationModal();
  }

  public hideConfirmationModal(){
    $('#confirmation-modal').modal('hide');
  }

  public showCreatePantryModal(){
    $('#create-pantry-modal').modal();
  }

  public showCreateOfficeModal(){
    $('#create-office-modal').modal();
  }

  public onChangeOffice(officeId: string){
    this.selectOffice(officeId);
  }

  public selectOffice(officeId: string){
    this.selectedOfficeId = officeId;
    this.getPantriesByOfficeId(officeId);
    this.router.navigate([`manage/${officeId}`]);
  }

  public onNewOffice(event){
    this.getAllOffices();
    this.selectOffice(event);
  }

}
