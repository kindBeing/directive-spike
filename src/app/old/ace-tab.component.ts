import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CustomTabBarComponent} from './custom-tab-bar.component';

@Component({
  selector: 'custom-tab',
  template: `
    <custom-tab-bar (tabClicked)=""></custom-tab-bar>
  `
})

export class AceTabComponent implements OnInit {
  tabs: CustomTabs;
  customTabBar: CustomTabBarComponent;

  constructor() {
  }

  selectedTab = 'ACCOUNT';
  @Output() selectedTabEvent = new EventEmitter<string>();


  ngOnInit(): void {
    this.selectedTabEvent.emit(this.selectedTab);
  }

  onClicked($event) {
    this.selectedTabEvent.emit($event.target.tab);
    this.selectedTab = $event.target.tab;
  }
}

