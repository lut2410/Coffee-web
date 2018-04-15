import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './not-found.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { ManagementFormComponent } from './management-form/management-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ManagementFormComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
