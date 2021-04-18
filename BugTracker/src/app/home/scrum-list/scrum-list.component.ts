import { Component, Input } from '@angular/core';
import { ScrumList } from './scrum-list';

@Component({
    selector: 'app-scrum-list',
    templateUrl: './scrum-list.component.html',
    styleUrls: ['./scrum-list.component.scss']
})

export class ScrumListComponent {
    @Input() list?: ScrumList;
}