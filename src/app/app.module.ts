import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyExplorerComponent } from './components/company-explorer/company-explorer.component';
import { CourseInterfaceComponent } from './components/course-interface/course-interface.component';
import { FormsModule } from '@angular/forms';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { ProfileBitComponent } from './components/profile-bit/profile-bit.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {} from 'jasmine';

@NgModule({
  declarations: [
    AppComponent,
    ProfileBitComponent,
    CompanyExplorerComponent,
    FrontPageComponent,
    CourseInterfaceComponent,
    SearchBarComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
