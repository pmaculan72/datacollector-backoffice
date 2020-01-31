import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailComponent } from './company-detail.component';
import { CompanyListComponent } from './company-list.component';
import { QuestionsComponent } from 'src/app/components/questions/questions.component';
import { FilesComponent } from 'src/app/components/files/files.component';
import { MessagesComponent } from 'src/app/components/messages/messages.component';
import { AboutCompanyComponent } from 'src/app/components/about-company/about-company.component';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NewCompanyComponent } from 'src/app/components/new-company/new-company.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
   declarations: [
      AboutCompanyComponent,
      CompanyDetailComponent,
      CompanyListComponent,
      FilesComponent,
      MessagesComponent,
      NewCompanyComponent,
      QuestionsComponent,
   ],
   imports: [ BrowserModule, CommonModule, NgbModule, NgxDatatableModule, RouterModule ],
   exports: [],
   providers: [
      CompanyDetailComponent,
      CompanyListComponent
   ],
   entryComponents: [
      NewCompanyComponent,
      CompanyDetailComponent,
      FilesComponent,
      QuestionsComponent,
      MessagesComponent
   ]
})
export class CompanyModule {}