import { Component } from '@angular/core';
import { AppService } from 'src/app/providers/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Home';
  }

}
