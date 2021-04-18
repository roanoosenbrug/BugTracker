import { ScrumPhases } from '../scrum-phases';
import { Ticket } from '../scrum-ticket/ticket';

export class ScrumList {
    public phase?: ScrumPhases;
    public tickets?: Ticket[];

    constructor(phase: ScrumPhases, tickets: Ticket[]) {
        this.phase = phase;
        this.tickets = tickets;
    }
}