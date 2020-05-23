import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RefereeLandingComponent } from './referee/referee-landing/referee-landing.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'referees', component: RefereeLandingComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
]