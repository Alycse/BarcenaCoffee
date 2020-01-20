import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css', '../modal-shared.component.css']
})
export class SuccessModalComponent implements OnInit {

  @Input() public modalText: string;
  @Input() public okButtonText: string;
  @Output() public onOkEvent = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {
  }
 
  public emitEvent(){
    this.onOkEvent.emit();
  }
}