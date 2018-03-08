
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LetterAvatarModule } from './modules/letter-avatar/letter-avatar.module';
import { LetterAvatarComponent } from './modules/letter-avatar/letter-avatar/letter-avatar.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LetterAvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
