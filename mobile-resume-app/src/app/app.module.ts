import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { OutsideComponent } from './outside/outside.component';
import { EducationEntryComponent } from './education/education-entry/education-entry.component';
import { WorkEntryComponent } from './work/work-entry/work-entry.component';
import { ProjectEntryComponent } from './projects/project-entry/project-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    EducationComponent,
    ProjectsComponent,
    OutsideComponent,
    EducationEntryComponent,
    WorkEntryComponent,
    ProjectEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
