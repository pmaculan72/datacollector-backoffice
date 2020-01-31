import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';

// *******************************************************************************
// Layouts

import { Layout1Component } from './views/layout/layout-1/layout-1.component';

// *******************************************************************************
// Pages

import { HomeComponent } from './views/home/home.component';
import { CompanyListComponent } from './views/company/company-list.component';
import { CompanyDetailComponent } from './views/company/company-detail.component';

// *******************************************************************************
// Routes

const routes: Routes = [

   {
      path: '', component: Layout1Component, pathMatch: 'full', children: [
         { path: '', component: HomeComponent },
      ]
   },

   {
      path: 'all-companies', component: Layout1Component,
      children: [{ path: '', component: CompanyListComponent }]
   },
   {
      path: 'company-detail', component: Layout1Component,
      children: [{ path: '', component: CompanyDetailComponent }]
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