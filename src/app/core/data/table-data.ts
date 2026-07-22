export interface TableColumn {
    key: string;
    label: string;
    type: TableColumnType;
}

export enum TableColumnType {
    Text = 'text',
    Chip = 'chip',
    Buttons = 'buttons',
}
