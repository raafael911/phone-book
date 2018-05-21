import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      { path: ':id', component: PersonDetailComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
