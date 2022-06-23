import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListDisplayComponent } from './shop-list-display.component';

describe('ShopListDisplayComponent', () => {
  let component: ShopListDisplayComponent;
  let fixture: ComponentFixture<ShopListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopListDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
