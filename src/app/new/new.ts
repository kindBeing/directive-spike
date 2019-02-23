interface CustomTab {
  id: string;
  displayTitle: string
  selected: boolean;
  emptyMessage?: string;
}

interface CustomTabs {
  tabs: CustomTab[];
}

interface TabDataSource {
  makeTabData(): CustomTabs;
}

class CustomTabBuilder {
  static buildSettingTab(settingTab?: CustomTab) {
    return {
      id: 'ACCOUNT',
      displayTitle: 'Account',
      selected: false,
      emptyMessage: 'No set-bro items',
      ...settingTab,
    };
  }

  static buildAccountTab(accountTab?: CustomTab) {
    return {
      id: 'SETTINGS',
      displayTitle: 'Settings',
      selected: false,
      emptyMessage: 'No Account items',
      ...accountTab,
    };
  }

  static buildContactTab(contactTab?: CustomTab) {
    return {
      id: 'CONTACT',
      displayTitle: 'Contact',
      selected: false,
      emptyMessage: 'No Contact items',
      ...contactTab,
    };
  }
}

class TabDataProvider implements TabDataSource {
  makeTabData(): CustomTabs {
    return {
      tabs: [
        CustomTabBuilder.buildAccountTab(),
        CustomTabBuilder.buildContactTab(),
        CustomTabBuilder.buildSettingTab()]
    };
  }
}
