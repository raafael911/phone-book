import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { PeopleComponent } from './people/people.component';
import { FilterPipe } from './filter.pipe';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonCreateComponent } from './person-create/person-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailComponent,
    PeopleComponent,
    FilterPipe,
    PersonFormComponent,
    PersonCreateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
