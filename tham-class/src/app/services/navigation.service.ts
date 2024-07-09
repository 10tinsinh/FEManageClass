// navigation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { menu } from '../common/common.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentNavSubject = new BehaviorSubject<number>(menu.overview);
  currentNav$ = this.currentNavSubject.asObservable();

  private isHidenMenuSubject = new BehaviorSubject<boolean>(false);
  isHidenMenu$ = this.isHidenMenuSubject.asObservable();

  setCurrentNav(nav: number) {
    this.currentNavSubject.next(nav);
  }

  toggleMenu() {
    const currentValue = this.isHidenMenuSubject.value;
    this.isHidenMenuSubject.next(!currentValue);
  }
}
