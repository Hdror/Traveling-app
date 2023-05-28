import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TravelingTableComponent } from './cmps/traveling-table/traveling-table.component';
import { TravelPreviewComponent } from './cmps/travel-preview/travel-preview.component';
import { TravelingFormComponent } from './cmps/traveling-form/traveling-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { OptionsDropDownComponent } from './cmps/options-drop-down/options-drop-down.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    TravelingTableComponent,
    TravelPreviewComponent,
    TravelingFormComponent,
    OptionsDropDownComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
