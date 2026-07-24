import { Component, Input } from '@angular/core';

import { CardListItem, CardListData } from './data-list-card.types';

@Component({
    selector: 'app-data-list-card',
    templateUrl: './data-list-card.component.html',
    styleUrls: ['./data-list-card.component.scss'],
})
export class DataListCardComponent {
    @Input({ required: true })
    data!: CardListData;

    trackByTitle(index: number, item: CardListItem): string {
        return item.title;
    }
}
