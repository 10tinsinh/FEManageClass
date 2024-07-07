import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StudentComponent } from './student/student.component';
import { PaymentComponent } from './payment/payment.component';
import { VerticalNavbarComponent } from './vertical-navbar/vertical-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ScheduleComponent,
    StudentComponent,
    PaymentComponent,
    VerticalNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
