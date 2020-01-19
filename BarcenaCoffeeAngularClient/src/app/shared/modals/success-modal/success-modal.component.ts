import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css', '../modal-shared.component.css']
})
export class SuccessModalComponent implements OnInit {
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