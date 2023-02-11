import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerwwaziFormComponent } from './components/berwwazi-form/berwwazi-form.component';
import { BerwaziHeaderComponent } from './components/berwazi-header/berwazi-header.component';
@NgModule({
  declarations: [
    AppComponent,
    BerwwaziFormComponent,
    BerwaziHeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
