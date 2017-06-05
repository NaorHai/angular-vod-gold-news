import { AngularVodGoldNewsPage } from './app.po';

describe('angular-vod-gold-news App', () => {
  let page: AngularVodGoldNewsPage;

  beforeEach(() => {
    page = new AngularVodGoldNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
