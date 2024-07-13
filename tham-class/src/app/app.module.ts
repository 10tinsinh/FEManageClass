import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ScheduleComponent } from './features/schedule/schedule.component';
import { StudentComponent } from './features/student/student.component';
import { PaymentComponent } from './features/payment/payment.component';
import { HeaderComponent } from './core/header/header.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'student', component: StudentComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    ScheduleComponent,
    StudentComponent,
    PaymentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }