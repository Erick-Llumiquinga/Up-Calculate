import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { ModaComponent } from './moda/moda.component';
import { MedianaComponent } from './mediana/mediana.component';
import { MediaComponent } from './media/media.component';
import { FormsModule } from '@angular/forms';
import { ModalInfoPage } from './pages/modal-info/modal-info.page';
import { ModalInfoPageModule } from './pages/modal-info/modal-info.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyComponent,
    MediaComponent,
    MedianaComponent,
    ModaComponent
  ],
  entryComponents: [
    ModalInfoPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ModalInfoPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
