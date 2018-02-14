import { Component } from '@angular/core';

import { BlogPage } from '../blog/blog';
import { TimelinePage } from '../timeline/timeline';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TimelinePage;
  tab3Root = BlogPage;

  constructor() {

  }
}
