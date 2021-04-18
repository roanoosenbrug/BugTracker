import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScrumListComponent } from './home/scrum-list/scrum-list.component';
import { ScrumTicketComponent } from './home/scrum-ticket/scrum-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrumListComponent,
    ScrumTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
