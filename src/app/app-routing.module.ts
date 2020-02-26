import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'home',component:HomeComponent , pathMatch:'full'},
  {path:'services',component: ServicesComponent , pathMatch:'full'},
  {path:'projects',component: ProjectsComponent , pathMatch:'full'},
  {path:'contact',component: ContactComponent , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

