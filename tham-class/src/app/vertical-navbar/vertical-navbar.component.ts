import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { menu } from '../common/common.interface';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
})
export class VerticalNavbarComponent implements OnInit {
  menus = menu;
  isHidenMenu: boolean = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.isHidenMenu$.subscribe(isHidden => {
      this.isHidenMenu = isHidden;
    });
  }

  setCurrentNav(nav: number) {
    this.navigationService.setCurrentNav(nav);
  }
}
