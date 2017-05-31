import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { BoostProvider } from '../../providers/boost/boost';

/**
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
  providers: [BoostProvider]
})
export class MessagesPage {
  chats: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public boostProvider: BoostProvider) {
    this.loadContacts();
  }

  ionViewDidEnter() {
    this.events.publish('tab:selected', 'Messages');
  }

  loadContacts(){
    this.boostProvider.loadChats()
    .then(data => {
      this.chats = data;
    });
  }
}
