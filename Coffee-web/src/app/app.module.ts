import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthHttpService } from './auth/auth-http.service';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; //--> remove after apply API
import { InMemoryCategory } from './InMemoryCategory.service';
import { ManagementFormComponent } from './management-form/management-form.component';
import { TableService } from './service/table.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FoodService } from './service/food.service';
import { CategoryFoodService } from './service/category-food.service';
import { FoodWidgetBoxComponent } from './share/food-widget-box/food-widget-box.component';
import { FoodWidgetListComponent } from './share/food-widget-list/food-widget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ManagementFormComponent,
    FoodWidgetBoxComponent,
    FoodWidgetListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryCategory, { delay: 500 }),
    ],
  providers: [AuthService, AuthGuardService, AuthHttpService,
    TableService,CategoryFoodService,FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
