import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {UserListComponent  } from './user-list.component'; 
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [UserListComponent],
    imports:[BrowserModule, CommonModule, NgbModule, NgxDatatableModule, RouterModule],
    exports:[],
    providers:[UserListComponent],
    entryComponents:[]
})

export class UserModule {}