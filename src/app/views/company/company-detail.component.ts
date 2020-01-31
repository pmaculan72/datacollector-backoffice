import { Component } from '@angular/core';

declare var jQuery: any;

@Component({
   selector: 'app-company-detail',
   templateUrl: 'company-detail.template.html'
})

export class CompanyDetailComponent {
   active = 1;

   public constructor() {
   }
}
