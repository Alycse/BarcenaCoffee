import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() public modalText: string;
  @Input() public okButtonText: string;
  @Input() public cancelButtonText: string;
  @Output() public onOkEvent = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

  public emitEvent(){
    this.onOkEvent.emit();
  }

  public hideModal(){
    $('#confirmation-modal').modal('hide')
  }
}
