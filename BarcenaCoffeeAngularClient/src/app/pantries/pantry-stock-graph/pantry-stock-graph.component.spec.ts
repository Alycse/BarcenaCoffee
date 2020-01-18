import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryStockGraphComponent } from './pantry-stock-graph.component';

describe('PantryStockGraphComponent', () => {
  let component: PantryStockGraphComponent;
  let fixture: ComponentFixture<PantryStockGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantryStockGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryStockGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
