import { Component, Input } from '@angular/core';
import { Ticket } from './ticket';

@Component({
    selector: 'app-scrum-ticket',
    templateUrl: './scrum-ticket.component.html',
    styleUrls: ['./scrum-ticket.component.scss']
})

export class ScrumTicketComponent {
    @Input() ticket?: Ticket;
}