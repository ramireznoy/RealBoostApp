import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name = '';
  username = '';
  email = '';
  title = '';

  contacts: any;
  messages: any;
  card: any;
  settings: any;

  constructor(private nav: NavController, private auth: AuthServiceProvider, public events: Events) {
    let info = this.auth.getUserInfo();
    this.name = info['name'];
    this.username = info['username'];
    this.email = info['email'];

    this.contacts = 'ContactsPage';
    this.messages = 'MessagesPage';
    this.card = 'CardPage';
    this.settings = 'SettingsPage';

    events.subscribe('tab:selected', (title) => {
      this.title = title;
    });
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
}