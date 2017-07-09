import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";

import { StatisticsComponent } from "./statistics/statistics.component";
import { TaskComponent } from "./task/task.component";
import { TaskEditComponent } from "./task/edit/task-edit.component";
import { FilmCardComponent } from "./film-card/film-card.component";
import { FormMainComponent } from "./form/form-main.component";
import { FormTwoComponent } from "./form-t/form-two.component";

export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard",    component: DashboardComponent },
    { path: "statistics",   component: StatisticsComponent },
    { path: "film",         component: FilmCardComponent },
    { path: "form-main",    component: FormMainComponent },
    { path: "form-two",     component: FormTwoComponent },
    { path: "task",         component: TaskComponent },
    { path: "task/:id",     component: TaskEditComponent },
    { path: "task/new",     component: TaskEditComponent }
];
