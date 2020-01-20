import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfficeModalComponent } from './create-office-modal.component';

describe('CreateOfficeModalComponent', () => {
  let component: CreateOfficeModalComponent;
  let fixture: ComponentFixture<CreateOfficeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOfficeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOfficeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
