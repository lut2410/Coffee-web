import { Component, OnInit } from '@angular/core';
import { TableService } from '../service/table.service';
import { TableModel } from '../model/table';

import { FoodModel } from '../model/food';
import { CategoryFoodModel } from '../model/category-food';
import { CategoryFoodService } from '../service/category-food.service';

@Component({
  selector: 'app-management-form',
  templateUrl: './management-form.component.html',
  styleUrls: ['./management-form.component.css']
})
export class ManagementFormComponent implements OnInit {
  tables: TableModel[];
  selectedTable: TableModel;
  categoryFoods: CategoryFoodModel[];
  selectedCategoryFood:CategoryFoodModel
  foods: FoodModel[];
  constructor(private tableService: TableService,
    private categoryFoodService: CategoryFoodService) { }
  ngOnInit() {
    this.tableService.gets().subscribe(result => {
      this.tables = result
    })
    this.categoryFoodService.gets().subscribe(result => {
      this.categoryFoods = result
      console.log(this.categoryFoods);
    })
  }
  selectTable(idTable: any) {
    console.log('set table' + idTable);
    // this.tableService.get(idTable).subscribe(data => {
    //   this.selectedTable=data;
    // });
    // this.tableService.delete(idTable);
    // this.tableService.delete(idTable).subscribe(data => {
    //   this.tableService.gets().subscribe(result => {
    //     this.tables = result
    //     console.log(this.tables);
    //   })
    // });
    this.tableService.get(idTable).subscribe(data => {
      this.selectedTable = data;
      console.log(this.selectedTable);
    });
    console.log(this);
  }
  selectCategory(){
    console.log('a');
  }
}


