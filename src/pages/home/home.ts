import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/*import { Tab1 } from "./tabs/tab1-page";
import { Tab2 } from "./tabs/tab2-page";
import { Tab3 } from "./tabs/tab3-page";
import { Tab4 } from "./tabs/tab4-page";*/

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name = '';
  username = '';
  email = '';

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor(private nav: NavController, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();
    this.name = info['name'];
    this.username = info['username'];
    this.email = info['email'];

    /*this.tab1 = Tab1;
    this.tab2 = Tab2;
    this.tab3 = Tab3;
    this.tab4 = Tab4;*/
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
}