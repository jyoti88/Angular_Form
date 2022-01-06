import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
path: " ", pathMatch: "full",redirectTo: "/home"},
    {path:'home' , component:HomeComponent},
    {path:"student-list", component:StudentCreateComponent},
    {path:"student-create", component:StudentListComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
