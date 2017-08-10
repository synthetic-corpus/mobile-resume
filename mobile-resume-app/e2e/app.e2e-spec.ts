import { MobileResumeAppPage } from './app.po';

describe('mobile-resume-app App', () => {
  let page: MobileResumeAppPage;

  beforeEach(() => {
    page = new MobileResumeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
