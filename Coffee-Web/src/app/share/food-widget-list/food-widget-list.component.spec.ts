import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodWidgetListComponent } from './food-widget-list.component';

describe('FoodWidgetListComponent', () => {
  let component: FoodWidgetListComponent;
  let fixture: ComponentFixture<FoodWidgetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodWidgetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodWidgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
