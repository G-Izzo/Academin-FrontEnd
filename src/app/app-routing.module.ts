import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInterfaceComponent } from './components/course-interface/course-interface.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { SearchOutputComponent } from './components/search-output/search-output.component';

const routes: Routes = [
  { path: 'course/:courseID', component: CourseInterfaceComponent },
  { path: 'search', component: SearchOutputComponent },
  { path: '', component: FrontPageComponent },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
