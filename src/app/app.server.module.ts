import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { IonicServerModule } from '@ionic/angular-server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    IonicServerModule,
    ServerTransferStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
