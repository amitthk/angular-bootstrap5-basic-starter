import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RerenderDirective } from './rerender/rerender.directive';
import { TextTickerComponent } from './text-ticker/text-ticker.component';

@NgModule({
  declarations: [
    AppComponent,
    TextTickerComponent,
    RerenderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
