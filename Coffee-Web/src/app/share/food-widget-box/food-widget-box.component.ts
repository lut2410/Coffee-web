import { Component, OnInit, Input } from '@angular/core';
import { FoodModel } from '../../model/food';
import { FoodService } from '../../service/food.service';

@Component({
  selector: 'food-widget-box',
  template: `
  {{str}}
  dd
  `,
  styleUrls: ['./food-widget-box.component.css']
})
export class FoodWidgetBoxComponent implements OnInit {
  @Input() str: string;
  constructor(private foodService:FoodService) { }

  ngOnInit() {
    // this.foodService.
    console.log("aaa")
    console.log(this.str)
  }

}
