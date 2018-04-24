import { Component, OnInit } from '@angular/core';
import { TableService } from '../service/table.service';
import { TableModel } from '../model/table';

import { FoodModel } from '../model/food';
import { CategoryFoodModel } from '../model/category-food';
import { CategoryFoodService } from '../service/category-food.service';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-management-form',
  templateUrl: './management-form.component.html',
  styleUrls: ['./management-form.component.css']
})
export class ManagementFormComponent implements OnInit {
  tables: TableModel[];
  selectedTable: TableModel;
  selectedCategoryFood:CategoryFoodModel
  selectedFood:FoodModel
  categoryFoods: CategoryFoodModel[];
  listFoodInCategory: FoodModel[]=[];
  // listFoodInCategory="hehe"
  constructor(private tableService: TableService,
    private categoryFoodService: CategoryFoodService,
  private foodService:FoodService) { }
  ngOnInit() {
    this.tableService.gets().subscribe(result => {
      this.tables = result
      // this.selectedTable=this.tables[0]
    })
    this.categoryFoodService.gets().subscribe(result => {
      this.categoryFoods = result
      console.log(this.categoryFoods);
    })
    // get list food
    this.foodService.gets().subscribe(data=>{
      // get food in selectedCategoryFood
      // console.log(this.listFoodInCategory)
      this.listFoodInCategory=data
      // console.log(this.listFoodInCategory)
    });

  }

  selectTable(idTable: any) {
    console.log('set table' + idTable);
    this.tableService.get(idTable).subscribe(data => {
      this.selectedTable = data;
      console.log(this.selectedTable);
    });
    console.log(this);
  }
  selectCategory(){
    console.log(this);
  }
  selectFood(food){
    this.selectedFood=food;
  }
}


