import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPetsComponent } from './allpets.component';

describe('AddAppointmentComponent', () => {
  let component: AllPetsComponent;
  let fixture: ComponentFixture<AllPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
