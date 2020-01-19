import { Pantry } from './../../../_interfaces/pantry.model';
import { PantryConverted } from './../../../_interfaces/pantry-converted.model';
import { RepositoryService } from './../../../../app/shared/services/repository.service';

import { Component, OnInit, Input } from '@angular/core';
import { PantrySettingsService } from './../../../shared/services/pantry-settings.service';
import { ErrorHandlerService } from './../../../shared/services/error-handler.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restock-modal',
  templateUrl: './restock-modal.component.html',
  styleUrls: ['./restock-modal.component.css']
})
export class RestockModalComponent implements OnInit {
  @Input() public pantry: Pantry;

  public restockForm: FormGroup;

  public errorMessage: string;

  constructor(private pantrySettings: PantrySettingsService, private repository: RepositoryService, 
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.restockForm = new FormGroup({
      coffeeBeanBagQuantity: new FormControl('', [Validators.required]),
      sugarPackQuantity: new FormControl('', [Validators.required]),
      milkCartonQuantity: new FormControl('', [Validators.required])
    });
    this.patchControls();
  }

  public patchControls(){
    let convertedPantry: PantryConverted = this.pantrySettings.convertPantryToContainers(this.pantry);
    this.restockForm.patchValue(convertedPantry);
  }

  getIngredientContainerAmtFromUnits(units: number){
    return this.pantrySettings.getIngredientContainerAmtFromUnits(units);
  }

  public validateControl(controlName: string) {
    if (this.restockForm.controls[controlName].invalid && this.restockForm.controls[controlName].touched)
      return true;
 
    return false;
  }
 
  public hasError(controlName: string, errorName: string) {
    if (this.restockForm.controls[controlName].hasError(errorName))
      return true;
 
    return false;
  }

  public restockPantry(restockFormValue) {
    if (this.restockForm.valid) {
      this.pantry.coffeeBeanUnits = this.pantrySettings.getUnitsFromIngredientContainerAmt(restockFormValue.coffeeBeanBagQuantity),
      this.pantry.sugarUnits = this.pantrySettings.getUnitsFromIngredientContainerAmt(restockFormValue.sugarPackQuantity),
      this.pantry.milkUnits = this.pantrySettings.getUnitsFromIngredientContainerAmt(restockFormValue.milkCartonQuantity)

      let apiAddress = `api/pantry/${this.pantry.id}`;
      this.repository.update(apiAddress, this.pantry)
        .subscribe(res => {
        },
          (error => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
      )
      $('#restock-modal').modal('hide');
    }
  }

  public cancel(){
    $('#restock-modal').modal('hide')
  }

}
