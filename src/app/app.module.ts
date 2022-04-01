import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EducacionComponent } from './educacion/educacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NgbModule } from'@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    EducacionComponent,
    ToolbarComponent,
    PerfilComponent,
    LoginComponent,
    SidebarComponent,
    EditDialogComponent,
    SkillsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#FDB900",
      "radius": 40,
      "maxPercent": 200,
      "units": " %",
      "unitsColor": "#000000",
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#FFFFFF",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#000000",
      "subtitleColor": "#000000",
      "showSubtitle": true,
      "showInnerStroke": false,
      "startFromZero": false}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule
  ],
  entryComponents: [EditDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule

  ]
})
export class AppModule { }

