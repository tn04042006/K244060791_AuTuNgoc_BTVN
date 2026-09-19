import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogServiceComponent } from './catalog-service-component';

describe('CatalogServiceComponent', () => {
  let component: CatalogServiceComponent;
  let fixture: ComponentFixture<CatalogServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogServiceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
