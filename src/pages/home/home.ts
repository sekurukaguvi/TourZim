import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AngularFirestore } from 'angularfire2/firestore'; 
import { DbproviderProvider } from '../../providers/dbprovider/dbprovider';
import * as firebase from 'firebase';
import { firestore} from 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    g: any = [];
    params: any = {};
    itemss: any = [];

    constructor(public navCtrl: NavController) {

        var db = firebase.firestore();

        var docRef = db.collection("cities").doc("Kwekwe");


       
        var cityparams = [];
        var dgt;
        var items = [];



        db.collection("cities").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, " => ", doc.data());
                dgt = doc.data();
                console.log(dgt);
           
                try {
                    items.push( doc.data() );
            
                } catch (e) {
                    console.log("zvikunetsa");
                }

            });
        });

  

        this.params.data =  {items}

               console.log(this.params.data);

         console.log(items);


        this.params.events = {
            'onItemClick': function (item: any) {
                console.log("onItemClick");

            },
            'onExplore': function (item: any) {
                console.log("onItemClick");
            },
            'onShare': function (item: any) {
                console.log("onItemClick");
            },
            'onLike': function (item: any) {
                console.log("onItemClick");
            },
            'onFavorite': function (item: any) {
                console.log("onItemClick");
            },
            'onFab': function (item: any) {
                console.log("onItemClick");
            },
        };

    }


}
