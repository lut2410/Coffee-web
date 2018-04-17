import { Injectable } from '@angular/core';
import { FoodModel } from '../model/food';
import { AuthHttpService } from '../auth/auth-http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FoodService {
  private API_PATH = '/api/food/';

  constructor(private authHttpService: AuthHttpService) { }

  gets(): Observable<FoodModel[]> {
    return this.authHttpService.get(this.API_PATH)
      .map(res => res.json() || []);
  }
  get(id): Observable<FoodModel> {
    return this.authHttpService.get(this.API_PATH + id).map(res => res.json() || []);
  }

  add(task: FoodModel): Observable<FoodModel> {
    return this.authHttpService.post(this.API_PATH, task)
      .map(res => res.json());
  }

  put(task: FoodModel): Observable<any> {
    return this.authHttpService.put(this.API_PATH + "/" + task.id, task);
  }

  delete(id): Observable<any>{
    var url: string = this.API_PATH + "/" + id;
    return this.authHttpService.delete(url)
  }
}
