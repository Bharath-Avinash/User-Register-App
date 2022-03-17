import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path: "", redirectTo: "register", pathMatch: "full"
  }, {

    path: "register", component: RegisterComponent
  },
  {
    path: "all-users",component: AllUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
