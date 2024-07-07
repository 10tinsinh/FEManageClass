import { Component, OnInit } from '@angular/core';
import { NavigationService } from './services/navigation.service';
import { menu } from './common/common.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tham-class';
  curMenu = 'Dashboard Overview';
  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.currentNav$.subscribe(nav => {
      switch(nav){
        case menu.overview:
          this.curMenu = 'Dashboard Overview';
          break;
        case menu.schedule:
          this.curMenu = 'Schedule';
          break;
        case menu.student:
          this.curMenu = 'Student';
          break;
        case menu.payment:
          this.curMenu = 'Payment';
          break;
      }
    });
  }
}
