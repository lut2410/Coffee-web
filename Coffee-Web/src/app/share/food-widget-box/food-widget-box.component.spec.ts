import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodWidgetBoxComponent } from './food-widget-box.component';

describe('FoodWidgetBoxComponent', () => {
  let component: FoodWidgetBoxComponent;
  let fixture: ComponentFixture<FoodWidgetBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodWidgetBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodWidgetBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
