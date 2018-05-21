import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
