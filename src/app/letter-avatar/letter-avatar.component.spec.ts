import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterAvatarComponent } from './letter-avatar.component';

describe('LetterAvatarComponent', () => {
  let component: LetterAvatarComponent;
  let fixture: ComponentFixture<LetterAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
