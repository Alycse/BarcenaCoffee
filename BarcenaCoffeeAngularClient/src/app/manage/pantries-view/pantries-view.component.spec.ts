import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantriesViewComponent } from './pantries-view.component';

describe('PantriesViewComponent', () => {
  let component: PantriesViewComponent;
  let fixture: ComponentFixture<PantriesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantriesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
