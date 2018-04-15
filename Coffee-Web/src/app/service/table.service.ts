import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttpService } from '../auth/auth-http.service';
import { TableModel } from '../model/table';

@Injectable()
export class TableService {
  private API_PATH = '/api/table';

  constructor(private authHttpService: AuthHttpService) { }

  get(): Observable<TableModel[]> {
    return this.authHttpService.get(this.API_PATH)
      .map(res => res.json() || []);
  }

  add(task: TableModel): Observable<TableModel> {
    return this.authHttpService.post(this.API_PATH, task)
      .map(res => res.json());
  }

}
