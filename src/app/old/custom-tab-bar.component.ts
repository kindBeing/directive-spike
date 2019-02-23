import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'custom-tab-bar',
  template: `
    <ion-tab-bar slot="bottom" [selectedTab]="selectedTab">
      <ion-tab-button *ngFor="let customTab of customTabs" [tab]="customTab.id" (click)="onClicked($event)">
        {{customTab.displayName}}}
      </ion-tab-button>
    </ion-tab-bar>
  `
})

export class CustomTabBarComponent implements OnInit {
  customTabs: CustomTabs;
  selectedTab: string;
  @Output() tabClicked: boolean;

  constructor(tabs: CustomTabs) {
    this.customTabs = tabs;
  }

  ngOnInit(): void {
    this.selectedTab = this.findFirstSelected();
  }

  findFirstSelected(): string {
    const tabId = this.customTabs.tabs.find((tab) => {
      return tab.selected === true;
    }).id;
    return tabId;
  }

  onClicked($event: any) {
    this.tabClicked = $event.target.tab;
  }
}
