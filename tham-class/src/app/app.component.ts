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
      nav === menu.overview ? this.curMenu = 'Dashboard Overview' :
      (nav === menu.schedule ? this.curMenu = 'Schedule' : (
        nav === menu.student ? this.curMenu = 'Student' : 'Payment'
      ))
    });
  }
}
