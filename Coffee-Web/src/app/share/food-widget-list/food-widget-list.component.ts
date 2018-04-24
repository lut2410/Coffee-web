import { Component, OnInit, Input } from '@angular/core';
import { FoodModel } from '../../model/food';
import { FoodService } from '../../service/food.service';

@Component({
  selector: 'food-widget-list',
  templateUrl:'./food-widget-list.component.html',
  styleUrls: ['./food-widget-list.component.css']
})
export class FoodWidgetListComponent implements OnInit {
  @Input() listFood: FoodModel[];
  // listFoodd: FoodModel[];
  // @Input() food1:FoodModel;
  // @Input() str:string;
  // @Input() listFood:string;
  list:string="33"
  constructor(private foodService:FoodService) { }
  ngOnInit() {
    this.foodService.gets().subscribe(data=>{
      this.listFood=data
      console.log(this.listFood);
      // this.food1=this.listFoodd[0]
    });
    console.log(this.listFood);
    console.log(this.listFood);
    this.list="list"
    console.log(this.list);
  }

}
