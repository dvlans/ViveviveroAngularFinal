import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCactusComponent } from './product-cactus.component';

describe('ProductCactusComponent', () => {
  let component: ProductCactusComponent;
  let fixture: ComponentFixture<ProductCactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
