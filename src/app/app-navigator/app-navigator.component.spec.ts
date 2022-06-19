import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavigatorComponent } from './app-navigator.component';

describe('AppNavigatorComponent', () => {
  let component: AppNavigatorComponent;
  let fixture: ComponentFixture<AppNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
