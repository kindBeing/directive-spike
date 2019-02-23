import { Component } from '@angular/core';
import {DataSource, FunObject} from './data-source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  data: FunObject[];
  selectedTab: string;

  displaySelectedMap = {
    ACCOUNT: 'account',
    CONTACT: 'contact',
    SETTINGS: 'setting',
  };

  title = 'directive-spike';

  constructor(private dataSource: DataSource) {

    this.dataSource.fetchData().subscribe((data) => {
      this.data = data;
    });
  }

  onTabChange(tabName: string) {
    this.selectedTab = tabName;
  }
}
