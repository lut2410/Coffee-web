import { Injectable } from '@angular/core';
import { CategoryFoodModel } from '../model/category-food';
import { Observable } from 'rxjs/Observable';
import { AuthHttpService } from '../auth/auth-http.service';

@Injectable()
export class CategoryFoodService {
  private API_PATH = '/api/categoryFood/';

  constructor(private authHttpService: AuthHttpService) { }

  gets(): Observable<CategoryFoodModel[]> {
    return this.authHttpService.get(this.API_PATH)
      .map(res => res.json() || []);
  }
  get(id): Observable<CategoryFoodModel> {
    return this.authHttpService.get(this.API_PATH + id).map(res => res.json() || []);
  }

  add(task: CategoryFoodModel): Observable<CategoryFoodModel> {
    return this.authHttpService.post(this.API_PATH, task)
      .map(res => res.json());
  }

  put(task: CategoryFoodModel): Observable<any> {
    return this.authHttpService.put(this.API_PATH + "/" + task.id, task);
  }

  delete(id): Observable<any>{
    var url: string = this.API_PATH + "/" + id;
    return this.authHttpService.delete(url)
  }
}
