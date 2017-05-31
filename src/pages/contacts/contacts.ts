import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { BoostProvider } from '../../providers/boost/boost';

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
  providers: [BoostProvider]
})
export class ContactsPage {
  name: string;
  username: string;
  email: string;
  contacts: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public boostProvider: BoostProvider) {
    this.name = localStorage.getItem('name');
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.loadContacts();
  }

  ionViewDidEnter() {
    this.events.publish('tab:selected', 'Contacts');    
  }

  loadContacts(){
    this.boostProvider.loadContacts()
    .then(data => {
      this.contacts = data;
    });
  }
  
}
