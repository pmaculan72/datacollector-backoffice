import { Component, Input, HostBinding } from '@angular/core';
import { AppService } from 'src/app/providers/app.service';
import { LayoutService } from 'src/app/views/layout/layout.service';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styles: [':host { display: block; }']
})
export class LayoutNavbarComponent {
  isExpanded = false;
  isRTL: boolean;

  @Input() sidenavToggle = true;

  @HostBinding('class.layout-navbar') hostClassMain = true;

  constructor(private appService: AppService, private layoutService: LayoutService) {
    this.isRTL = appService.isRTL;
  }

  currentBg() {
    return `bg-${this.appService.layoutNavbarBg}`;
  }

  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }
}
