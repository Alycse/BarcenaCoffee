import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestockModalComponent } from './restock-modal.component';

describe('RestockModalComponent', () => {
  let component: RestockModalComponent;
  let fixture: ComponentFixture<RestockModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestockModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
