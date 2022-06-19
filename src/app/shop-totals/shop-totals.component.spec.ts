import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTotalsComponent } from './shop-totals.component';

describe('ShopTotalsComponent', () => {
  let component: ShopTotalsComponent;
  let fixture: ComponentFixture<ShopTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopTotalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
