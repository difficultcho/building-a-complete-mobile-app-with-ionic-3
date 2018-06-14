import { Component } from '@angular/core';

import { LearnFeedPage } from '../learn-feed/learn-feed';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LearnFeedPage;
  tab2Root = LoginPage;

  constructor() {

  }
}
