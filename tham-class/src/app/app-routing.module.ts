import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StudentComponent } from './student/student.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'student', component: StudentComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' }, // Redirect to overview by default
  { path: '**', redirectTo: '/overview' } // Redirect to overview for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
