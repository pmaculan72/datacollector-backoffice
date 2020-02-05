import { AppService } from 'src/app/providers/app.service';
import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
   selector: 'app-user-list',
   templateUrl: 'user-list.template.html',
   styleUrls: [
      '../../../../node_modules/@swimlane/ngx-datatable/index.scss',
      '../../../vendor/libs/ngx-datatable/ngx-datatable.scss',
      '../../../../node_modules/@swimlane/ngx-datatable/assets/icons.css'
   ]
})
export class UserListComponent {

   @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

   loadingIndicator = true;
   rows = [];
   selected = [];
   temp = [];
   constructor(private appService: AppService) {
      this.appService.pageTitle = 'All Users';

      this.fetch((data) => {
         // cache our list
         this.temp = [...data];

         // push our inital complete list
         this.rows = data;

         setTimeout(() => { this.loadingIndicator = false; }, 1500);
      });
   }

   fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `assets/json/ngx-datatable-data.json`);

      req.onload = () => {
         const data = JSON.parse(req.response);
         cb(data);
      };

      req.send();
   }
}
