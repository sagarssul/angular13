import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardModule } from './../components/pages/dashboard/dashboard.module';
import { HttpClientService } from 'src/services/http-client.service';
import { LocalStorageService } from 'src/services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [HttpClientService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
