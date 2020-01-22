import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-modal',
  templateUrl: './graph-modal.component.html',
  styleUrls: ['./graph-modal.component.css']
})
export class GraphModalComponent implements OnInit {

  @Input() public title: string;
  @Input() public type: string;
  @Input() public data: [string, number][];
  @Input() public columnNames: string[];
  @Input() public width: number;
  @Input() public height: number;
  public options: {
    colors: ['#f0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    is3D: true
}

  constructor() { }

  ngOnInit() {
  }

}
