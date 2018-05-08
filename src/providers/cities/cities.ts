import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { firestore } from 'firebase/firestore';


/*
  Generated class for the CitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CitiesProvider {

  constructor(public http: HttpClient) {
      console.log('Hello CitiesProvider Provider');

      var db = firebase.firestore();

      var docRef = db.collection("cities").doc("Kwekwe");

      db.collection("cities").get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
          });
      });
  }

}
