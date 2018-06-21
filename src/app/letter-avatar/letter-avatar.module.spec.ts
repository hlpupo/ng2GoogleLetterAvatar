import { LetterAvatarModule } from './letter-avatar.module';

describe('LetterAvatarModule', () => {
  let letterAvatarModule: LetterAvatarModule;

  beforeEach(() => {
    letterAvatarModule = new LetterAvatarModule();
  });

  it('should create an instance', () => {
    expect(letterAvatarModule).toBeTruthy();
  });
});
