import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LearnFeedPage } from '../pages/learn-feed/learn-feed';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make TabsPage the root (or first) page
  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any, params: any}>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menu: MenuController,
    public app: App
  ) {
    this.rootPage = TabsPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {
        title: '过滤条件1',
        component: LearnFeedPage,
        params: {
          query: '过滤条件1'
        }
      },
      {
        title: '过滤条件2',
        component: LearnFeedPage,
        params: {
          query: '过滤条件2'
        }
      },
      {
        title: '过滤条件3',
        component: LearnFeedPage,
        params: {
          query: '过滤条件3'
        }
      },
      {
        title: '登录',
        component: LoginPage,
        params: {
          query: ''
        }
      }
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component, page.params);
  }
}
