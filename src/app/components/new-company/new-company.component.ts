import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent {
  constructor() {}

  closeModal() {
     //this.modalService.hide(1);
  }
}
