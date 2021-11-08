import { Component, Input } from '@angular/core';
import { ColumnDefModel } from 'src/models/column-def.model';
import { JsonApiModel } from 'src/models/json-api.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() rows: JsonApiModel[] = [];
  @Input() columns: ColumnDefModel[] = [];

  getCell(col: ColumnDefModel, row: JsonApiModel): string {
    return row[col.field as keyof JsonApiModel];
  }
}
