import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphModalComponent } from './graph-modal.component';

describe('GraphModalComponent', () => {
  let component: GraphModalComponent;
  let fixture: ComponentFixture<GraphModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
