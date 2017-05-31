import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BoostProvider {
  contacts: any;
  chats: any;

  constructor(public http: Http) {    
  }

  loadContacts() {
    if (this.contacts) {
      return Promise.resolve(this.contacts);
    }

    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=30')
        .map(res => res.json())
        .subscribe(data => {
          this.contacts = data.results;
          resolve(this.contacts);
        });
    });
  }

  loadChats() {
    if (this.chats) {
      return Promise.resolve(this.chats);
    }

    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=10')
        .map(res => res.json())
        .subscribe(data => {
          this.chats = data.results;
          resolve(this.chats);
        });
    });
  }

}
