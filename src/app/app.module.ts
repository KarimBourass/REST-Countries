import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './component/header/header.component';
import { ContriesComponent } from './component/contries/contries.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './shared/countries.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContryComponent } from './component/contry/contry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContriesComponent,
    ContryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
