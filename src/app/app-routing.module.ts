import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInterfaceComponent } from './components/course-interface/course-interface.component';
import { FrontPageComponent } from './components/front-page/front-page.component';

const routes: Routes = [
  { path: '/:course_id', component: CourseInterfaceComponent },
  { path: '', component: FrontPageComponent },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
