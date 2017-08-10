import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { OutsideComponent } from './outside/outside.component';

const myRoutes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'education', component: EducationComponent },
  { path: 'work', component: WorkComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'outside', component: OutsideComponent },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
