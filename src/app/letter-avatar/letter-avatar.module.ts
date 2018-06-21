import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterAvatarComponent } from './letter-avatar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LetterAvatarComponent],
  exports: [ LetterAvatarComponent ]
})
export class LetterAvatarModule {
  constructor( @Optional() @SkipSelf() parentModule: LetterAvatarModule) {
    if (parentModule) {
      throw new Error(
        'LetterAvatarModule is already loaded. Import it in the MainModule only');
    }
  }
 }
