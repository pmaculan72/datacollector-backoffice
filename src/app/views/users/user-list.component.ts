import { AppService } from 'src/app/providers/app.service';
import { Component,  ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NewCompanyComponent } from 'src/app/components/new-company/new-company.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.template.html',
  styleUrls: [
    '../../../../node_modules/@swimlane/ngx-datatable/index.scss',
    '../../../vendor/libs/ngx-datatable/ngx-datatable.scss',
    '../../../../node_modules/@swimlane/ngx-datatable/assets/icons.css'
 ]
})
export class UserListComponent  {

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  rows = [];
  selected = [];
  constructor( private appService: AppService) {}
  
}
