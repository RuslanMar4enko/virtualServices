import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './pages/login/login.component';
import {HeaderComponent} from './components/header/header.component';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
