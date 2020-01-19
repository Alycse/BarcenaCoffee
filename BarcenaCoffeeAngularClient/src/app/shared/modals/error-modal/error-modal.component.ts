import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css', '../modal-shared.component.css']
})
export class ErrorModalComponent implements OnInit {
  @Input() public modalText: string;
  @Input() public okButtonText: string;
  @Output() public redirectOnOK = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {
  }
 
  public emitEvent(){
    this.redirectOnOK.emit();
  }
 
}