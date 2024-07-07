import { Component } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { menu } from '../common/common.interface';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
})
export class VerticalNavbarComponent {
  menus = menu;
  constructor(private navigationService: NavigationService) {}
  setCurrentNav(nav: number) {
    this.navigationService.setCurrentNav(nav);
  }
}
