import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-google-letter-avatar',
  templateUrl: './letter-avatar.component.html',
  styleUrls: ['./letter-avatar.component.scss']
})
export class LetterAvatarComponent implements OnInit {

  @Input() shape: string;
  @Input() fontSize: number;
  @Input() firstName: string;
  @Input() lastName: string;

  letter: string;
  letterClass: string;

  constructor() { }

  ngOnInit() {
    this.letter = (<String>this.firstName).trim().charAt(0);
    this.letterClass = 'letter_' + this.letter.toLocaleUpperCase();
  }

}
