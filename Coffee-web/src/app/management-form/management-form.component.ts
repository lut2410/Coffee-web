import { Component, OnInit } from '@angular/core';
import { TableService } from '../service/table.service';
import { TableModel } from '../model/table';

@Component({
  selector: 'app-management-form',
  templateUrl: './management-form.component.html',
  styleUrls: ['./management-form.component.css']
})
export class ManagementFormComponent implements OnInit {
  tables: TableModel[];
  constructor(private tableService: TableService) { }
  ngOnInit() {
    this.tableService.get().subscribe(result => {
      this.tables = result
    })
  }
}


