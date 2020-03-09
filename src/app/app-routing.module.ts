import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { FirstServiceComponent } from './services/first-service/first-service.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'home',component:HomeComponent , pathMatch:'full', data: { title: 'List of Products' }},
  {path:'services',component: ServicesComponent , pathMatch:'full', children:[
    {path:'FirstService', component:FirstServiceComponent},
  ]},
  {path:'projects',component: ProjectsComponent , pathMatch:'full'},
  {path:'contact',component: ContactComponent , pathMatch:'full'},
  {path:'Signup',component: SignupComponent , pathMatch:'full'},
  {path: '**', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

