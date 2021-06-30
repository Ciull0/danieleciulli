import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoPlusOneComponent } from './two-plus-one/two-plus-one.component';
import { TwoElementsComponent } from './two-elements/two-elements.component';
import { ThreeElementsComponent } from './three-elements/three-elements.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { HeroComponent } from './hero/hero.component';
import { CardComponent } from './card/card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { firebaseConfig } from '../environments/firebase';
import { environment } from '../environments/environment';
import { TextboxComponent } from './textbox/textbox.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    TwoPlusOneComponent,
    TwoElementsComponent,
    ThreeElementsComponent,
    HomeComponent,
    PageComponent,
    HeroComponent,
    CardComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
