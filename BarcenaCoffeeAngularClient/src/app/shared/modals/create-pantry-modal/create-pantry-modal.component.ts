import { Pantry } from './../../../_interfaces/pantry.model';
import { CreationPantry } from './../../../_interfaces/creation-pantry.model';
import { PantryConverted } from './../../../_interfaces/pantry-converted.model';
import { RepositoryService } from './../../../../app/shared/services/repository.service';

import { Component, OnInit, Input } from '@angular/core';
import { PantrySettingsService } from './../../../shared/services/pantry-settings.service';
import { ErrorHandlerService } from './../../../shared/services/error-handler.service';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pantry-modal',
  templateUrl: './create-pantry-modal.component.html',
  styleUrls: ['./create-pantry-modal.component.css']
})
export class CreatePantryModalComponent implements OnInit {
  public createPantryForm: FormGroup;

  public errorMessage: string;

  constructor(private pantrySettings: PantrySettingsService, private repository: RepositoryService, 
    private router: Router, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.createPantryForm = new FormGroup({
      pantryName: new FormControl('', [Validators.required]),
      coffeeBeanBagQuantity: new FormControl('', [Validators.required]),
      sugarPackQuantity: new FormControl('', [Validators.required]),
      milkCartonQuantity: new FormControl('', [Validators.required])
    });
  }

  getIngredientContainerAmtFromUnits(units: number){
    return this.pantrySettings.getIngredientContainerAmtFromUnits(units);
  }

  public validateControl(controlName: string) {
    if (this.createPantryForm.controls[controlName].invalid && this.createPantryForm.controls[controlName].touched)
      return true;
 
    return false;
  }
 
  public hasError(controlName: string, errorName: string) {
    if (this.createPantryForm.controls[controlName].hasError(errorName))
      return true;
 
    return false;
  }

  public createPantry(createPantryFormValue) {
    if (this.createPantryForm.valid) {
      let pantry: CreationPantry = {
        pantryName: createPantryFormValue.pantryName,
        coffeeBeanUnits: this.pantrySettings.getUnitsFromIngredientContainerAmt(createPantryFormValue.coffeeBeanBagQuantity),
        sugarUnits: this.pantrySettings.getUnitsFromIngredientContainerAmt(createPantryFormValue.sugarPackQuantity),
        milkUnits: this.pantrySettings.getUnitsFromIngredientContainerAmt(createPantryFormValue.milkCartonQuantity)
      }

      let apiAddress = `api/order`;
      this.repository.create(apiAddress, pantry)
        .subscribe(res => {
          window.location.reload();
        },
          (error => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
      )
      $('#create-pantry-modal').modal('hide')

    }
  }

  public cancel(){
    $('#create-pantry-modal').modal('hide')
  }

}
