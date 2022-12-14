import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyExplorerComponent } from './components/company-explorer/company-explorer.component';
import { CourseInterfaceComponent } from './components/course-interface/course-interface.component';
import { CourseRegistryComponent } from './components/course-registry/course-registry.component';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { FormsModule } from '@angular/forms';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { ProfileBitComponent } from './components/profile-bit/profile-bit.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {} from 'jasmine';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { SearchOutputComponent } from './components/search-output/search-output.component';
import { FilterByQueryPipe } from './pipes/filter-by-query.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileBitComponent,
    CompanyExplorerComponent,
    FrontPageComponent,
    CourseInterfaceComponent,
    SearchBarComponent,
    CourseStudentsComponent,
    CourseRegistryComponent,
    StudentCardComponent,
    SearchOutputComponent,
    FilterByQueryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
