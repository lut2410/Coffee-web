import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ManagementFormComponent } from './management-form/management-form.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateGuard } from './authenticate.guard';
import { UserService } from './user.service';

const routesApp: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'management',
    canActivate:[AuthenticateGuard],
    component: ManagementFormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ManagementFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp)
  ],
  providers: [UserService,AuthenticateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
