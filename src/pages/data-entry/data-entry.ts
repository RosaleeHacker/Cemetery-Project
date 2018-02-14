import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Person} from "../../models/person/person.interface";
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseListObservable} from "angularfire2/database-deprecated";

/**
 * Generated class for the DataEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-data-entry',
  templateUrl: 'data-entry.html',
})
export class DataEntryPage {

  person = {} as Person;

  personRef$: FirebaseListObservable<Person[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.personRef$ = this.database.list('person-list');
  }

  addPerson(person: Person)
  {
    this.personRef$.push(this.person);

    this.person = {} as Person;
  }

}
