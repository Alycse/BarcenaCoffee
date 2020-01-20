import { CreationOffice } from '../../../_interfaces/creation-office.model';
import { RepositoryService } from '../../services/repository.service';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Office } from 'src/app/_interfaces/office.model';

@Component({
  selector: 'app-create-office-modal',
  templateUrl: './create-office-modal.component.html',
  styleUrls: ['./create-office-modal.component.css']
})
export class CreateOfficeModalComponent implements OnInit {
  public createOfficeForm: FormGroup;

  @Input() public officeId: string;
  @Output() public onSuccessEvent = new EventEmitter();

  public errorMessage: string;

  constructor(private repository: RepositoryService, 
    private router: Router, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.createOfficeForm = new FormGroup({
      officeName: new FormControl('', [Validators.required])
    });
  }

  public validateControl(controlName: string) {
    if (this.createOfficeForm.controls[controlName].invalid && this.createOfficeForm.controls[controlName].touched)
      return true;
 
    return false;
  }
 
  public hasError(controlName: string, errorName: string) {
    if (this.createOfficeForm.controls[controlName].hasError(errorName))
      return true;
 
    return false;
  }

  public createOffice(createOfficeFormValue) {
    if (this.createOfficeForm.valid) {
      let office: CreationOffice = {
        officeName: createOfficeFormValue.officeName
      }

      let apiAddress = `api/office`;
      this.repository.create(apiAddress, office)
        .subscribe(res => {
          let createdOffice: Office = res as Office;
          this.onSuccessEvent.emit(createdOffice.id);
        },
          (error => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
      )
      this.hideModal();

    }
  }

  public hideModal(){
    $('#create-office-modal').modal('hide')
  }

}
