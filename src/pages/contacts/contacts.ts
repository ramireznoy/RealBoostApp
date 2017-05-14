import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  name: string;
  username: string;
  email: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.name = localStorage.getItem('name');
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
  }

  ionViewDidEnter() {
    this.events.publish('tab:selected', 'Contacts');
  }
  
}
