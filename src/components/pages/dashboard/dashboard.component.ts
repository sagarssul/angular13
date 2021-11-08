import { Component, OnInit } from '@angular/core';
import { ColumnDefModel } from 'src/models/column-def.model';
import { JsonApiModel } from 'src/models/json-api.model';
import { HttpClientService } from 'src/services/http-client.service';
import { LocalStorageService } from 'src/services/local-storage.service';
import { LOCAL_STORAGE } from 'src/utils/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private appService: HttpClientService,
    private localStorageService: LocalStorageService) { }

  rows: JsonApiModel[] = [];
  columns: ColumnDefModel[] = [
    {
      name: 'Title',
      field: 'name'
    },
    {
      name: 'Climate',
      field: 'climate'
    }
  ]
  name: string = '';
  searchTerm: string = '';

  ngOnInit() {
    const data = this.localStorageService.getItem(LOCAL_STORAGE.JSON_API);
    if (data) {
      this.rows = data;
    } else {
      this.appService.getJson().subscribe(response => {
        this.rows = response.results;
        this.localStorageService.setItem(LOCAL_STORAGE.JSON_API, this.rows);
      });
    }
  }

  addItem() {
    this.rows.push({ name: this.name });
    this.localStorageService.setItem(LOCAL_STORAGE.JSON_API, this.rows);
    this.name = '';
  }

  searchByName() {
    const data: JsonApiModel[] = this.localStorageService.getItem(LOCAL_STORAGE.JSON_API);
    if (!data) {
      return;
    }

    if (!this.searchTerm) {
      this.rows = data;
    } else {
      const searchQuery = this.searchTerm.toLowerCase();
      this.rows = data.filter(item => item.name.toLowerCase().includes(searchQuery));
    }
  }
}
