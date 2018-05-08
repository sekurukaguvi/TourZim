import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { GoogleCardLayout2 } from '../components/list-view/google-card/layout-2/google-card-layout-2';
import { DbproviderProvider } from '../providers/dbprovider/dbprovider';
import { CitiesProvider } from '../providers/cities/cities';

export const firebaseConfig = {
    apiKey: "AIzaSyAGSizFVpqOBwK7I2FydG8s_TF9L4DoJL0",
    authDomain: "tourzimbabwe-5aef9.firebaseapp.com",
    databaseURL: "https://tourzimbabwe-5aef9.firebaseio.com",
    projectId: "tourzimbabwe-5aef9",
    storageBucket: "tourzimbabwe-5aef9.appspot.com",
    messagingSenderId: "681630448077"

};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GoogleCardLayout2
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GoogleCardLayout2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbproviderProvider,
    CitiesProvider
  ]
})
export class AppModule {}
