import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';

// *******************************************************************************
// Layouts

import { Layout2Component } from './views/layout/layout-2/layout-2.component';

// *******************************************************************************
// Pages

import { HomeComponent } from './views/home/home.component';
import { CompanyListComponent } from './views/company/company-list.component';
import { CompanyDetailComponent } from './views/company/company-detail.component';
import {UserListComponent } from './views/users/user-list.component';

// *******************************************************************************
// Routes

const routes: Routes = [

   {
      path: '', component: Layout2Component, pathMatch: 'full', children: [
         { path: '', component: HomeComponent },
      ]
   },

   {
      path: 'all-companies', component: Layout2Component,
      children: [{ path: '', component: CompanyListComponent }]
   },
   {
      path: 'company-detail', component: Layout2Component,
      children: [{ path: '', component: CompanyDetailComponent }]
   },
   {
      path: 'all-users', component: Layout2Component,
      children: [{ path: '', component: UserListComponent }]
   },

   // 404 Not Found page
   { path: '**', component: NotFoundComponent }

];

// *******************************************************************************
//

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }