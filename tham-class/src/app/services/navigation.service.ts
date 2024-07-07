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

  setCurrentNav(nav: number) {
    this.currentNavSubject.next(nav);
  }
}
