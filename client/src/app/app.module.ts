import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';


import { FilmCardComponent } from './film-card/film-card.component';
import { FilmCardService } from './film-card/film-card.service';


import { DashboardComponent }  from "./dashboard/dashboard.component";

import { StatisticsComponent } from "./statistics/statistics.component";
import { TaskComponent }  from "./task/task.component";
import { TaskEditComponent }  from "./task/edit/task-edit.component";
import { AppComponent } from "./app.component";
import { FormMainComponent } from "./form/form-main.component";
import { FormTwoComponent } from "./form-t/form-two.component";
import { StatisticsService } from "./statistics/statistics.service";
import { TaskService } from "./task/task.service";
import { AppService } from "./app.service";
import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskEditComponent,
    StatisticsComponent,
    DashboardComponent,
    FilmCardComponent,
    FormMainComponent,
    FormTwoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    HttpModule,  
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
   providers: [StatisticsService, TaskService,FilmCardService, AppService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
