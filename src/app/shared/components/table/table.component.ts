import { Component, Input, OnInit } from '@angular/core';

import { TableColumn } from '@models/table-data';
import { TableColumnType } from '@models/table-data';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    @Input() dataSource: unknown[] = [];
    @Input() columns: TableColumn[] = [];

    TableColumnType = TableColumnType;
    displayedColumns: string[] = [];

    ngOnInit(): void {
        this.displayedColumns = this.columns.map((c) => c.key);
    }
}
