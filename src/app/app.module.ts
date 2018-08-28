import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RussianComponent } from './russian/russian.component';
import { JapaneseComponent } from './japanese/japanese.component';
import { GreekComponent } from './greek/greek.component';
import { TeluguComponent } from './telugu/telugu.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RussianComponent,
    JapaneseComponent,
    GreekComponent,
    TeluguComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
