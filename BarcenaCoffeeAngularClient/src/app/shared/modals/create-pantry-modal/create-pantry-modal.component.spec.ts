import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePantryModalComponent } from './create-pantry-modal.component';

describe('CreatePantryModalComponent', () => {
  let component: CreatePantryModalComponent;
  let fixture: ComponentFixture<CreatePantryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePantryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePantryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
