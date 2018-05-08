import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the DbproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbproviderProvider {
   // itemCollection: AngularFirestoreCollection<>;

    constructor(public http: HttpClient, private afs: AngularFirestore) {
        console.log('Hello DbproviderProvider Provider');

        //var db = firebase.firestore();


      var docRef = afs.collection("cities");
        
      
              // doc.data() will be undefined in this case
      console.log(docRef +"No such document!");
      

  }

}
