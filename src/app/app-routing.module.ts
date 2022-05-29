import { animation } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './educacion/educacion.component';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SkillsComponent } from './skills/skills.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ProyectsDialogComponent } from './proyects-dialog/proyects-dialog.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  {path: '', component:HeaderComponent, data: { animation: 'isHome' }},
  {path: 'skills', component:SkillsComponent,  data: { animation: 'isSkills' }},
  {path: 'education', component:EducacionComponent,  data: { animation: 'isEducation' }},
  {path: 'login', component:LoginComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'project', component: ProjectsComponent},
  {path: 'aboutme', component: AboutmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
