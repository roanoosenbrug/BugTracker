import { Component, OnInit } from '@angular/core';
import { ScrumList } from './scrum-list/scrum-list';
import { ScrumPhases } from './scrum-phases';
import { Ticket } from './scrum-ticket/ticket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public scrumLists: ScrumList[] = [];

  ngOnInit() {
    this.scrumLists = [
      { phase: ScrumPhases.ToDo, tickets: [new Ticket('My first ticket', 'My first description')]},
      { phase: ScrumPhases.InProgress, tickets: []},
      { phase: ScrumPhases.Review, tickets: []},
      { phase: ScrumPhases.Test, tickets: []},
      { phase: ScrumPhases.Release, tickets: []},
      { phase: ScrumPhases.Done, tickets: []}
    ];
  }

}
