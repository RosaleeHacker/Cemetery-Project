import { Component } from '@angular/core';

import { BlogPage } from '../blog/blog';
import { TimelinePage } from '../timeline/timeline';
import { HomePage } from '../home/home';
import { DataEntryPage } from '../data-entry/data-entry';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TimelinePage;
  tab3Root = BlogPage;
  tab4Root = DataEntryPage;

  constructor() {

  }
}
