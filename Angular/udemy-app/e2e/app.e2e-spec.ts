import { UdemyPage } from './app.po';

describe('udemy App', function() {
  let page: UdemyPage;

  beforeEach(() => {
    page = new UdemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
