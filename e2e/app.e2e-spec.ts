import { MahjongularPage } from './app.po';

describe('mahjongular App', () => {
  let page: MahjongularPage;

  beforeEach(() => {
    page = new MahjongularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
