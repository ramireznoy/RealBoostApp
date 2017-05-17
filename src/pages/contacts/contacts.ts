import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { ContactsProvider } from '../../providers/contacts/contacts';

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
  providers: [ContactsProvider]
})
export class ContactsPage {
  name: string;
  username: string;
  email: string;
  contacts: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public contactsProvider: ContactsProvider) {
    this.name = localStorage.getItem('name');
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.loadContacts();
  }

  ionViewDidEnter() {
    this.events.publish('tab:selected', 'Contacts');    
  }

  loadContacts(){
    this.contactsProvider.load()
    .then(data => {
      this.contacts = data;
    });
  }
  
}
