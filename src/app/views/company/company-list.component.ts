import { AppService } from 'src/app/providers/app.service';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NewCompanyComponent } from 'src/app/components/new-company/new-company.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
   selector: 'app-company-list',
   templateUrl: 'company-list.template.html',
   styleUrls: [
      '../../../../node_modules/@swimlane/ngx-datatable/index.scss',
      '../../../vendor/libs/ngx-datatable/ngx-datatable.scss',
      '../../../../node_modules/@swimlane/ngx-datatable/assets/icons.css'
   ],
   encapsulation: ViewEncapsulation.None
})
export class CompanyListComponent {
   @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

   loadingIndicator = true;
   rows = [];
   temp = [];
   selected = [];

   constructor(
      private appService: AppService, 
      private modalService: NgbModal,
      private router: Router) {
      this.appService.pageTitle = 'All companies';
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

   updateFilter(event) {
      const val = event.target.value.toLowerCase();

      // filter our data
      const temp = this.temp.filter(d => {
         return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      });

      // update the rows
      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
   }

   onSelect({ selected }) {
      this.selected.splice(0, this.selected.length);
      this.selected.push(...selected);
   }

   onActivate(event) {
      if ( event.type === 'click' ) {
         this.router.navigate(['/company-detail']);
      }
   }

   addCompany() {
      this.modalService.open(NewCompanyComponent);
   }
}
