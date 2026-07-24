import { TemplateRef } from '@angular/core';

export interface TableColumn {
    key: string;
    label: string;
    template?: TemplateRef<unknown>;
    columnClass?: string;
}

export enum TableColumnType {
    Text = 'text',
    Chip = 'chip',
    Buttons = 'buttons',
}
