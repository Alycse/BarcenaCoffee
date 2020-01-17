import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkDistGraphComponent } from './drink-dist-graph.component';

describe('DrinkDistGraphComponent', () => {
  let component: DrinkDistGraphComponent;
  let fixture: ComponentFixture<DrinkDistGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkDistGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkDistGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
