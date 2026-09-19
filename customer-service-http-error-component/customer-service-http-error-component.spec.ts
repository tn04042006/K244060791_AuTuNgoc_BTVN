import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerServiceHttpErrorComponent } from './customer-service-http-error-component';

describe('CustomerServiceHttpErrorComponent', () => {
  let component: CustomerServiceHttpErrorComponent;
  let fixture: ComponentFixture<CustomerServiceHttpErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerServiceHttpErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerServiceHttpErrorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
