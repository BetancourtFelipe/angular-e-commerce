import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHeadeComponent } from './products-heade.component';

describe('ProductsHeadeComponent', () => {
  let component: ProductsHeadeComponent;
  let fixture: ComponentFixture<ProductsHeadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsHeadeComponent]
    });
    fixture = TestBed.createComponent(ProductsHeadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
