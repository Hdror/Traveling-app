import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TravelingTableComponent } from './cmps/traveling-table/traveling-table.component';
import { TravelPreviewComponent } from './cmps/travel-preview/travel-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    TravelingTableComponent,
    TravelPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
