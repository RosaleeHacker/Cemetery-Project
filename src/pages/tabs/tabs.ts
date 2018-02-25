import { Component } from '@angular/core';

import { BlogPage } from '../blog/blog';
import { TimelinePage } from '../timeline/timeline';
import { HomePage } from '../home/home';
import { DataEntryPage } from '../data-entry/data-entry';
import { VegetationPage } from '../vegetation/vegetation';
import { AboutPage } from '../about/about';
import { TombstonesPage } from '../tombstones/tombstones';
import { HistoryTrailsPage } from '../history-trails/history-trails';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TimelinePage;
  tab3Root = BlogPage;
  tab4Root = DataEntryPage;
  tab5Root = VegetationPage;
  tab6Root = TombstonesPage;
  tab7Root = HistoryTrailsPage;
  tab8Root = AboutPage;

  constructor() {

  }
}
