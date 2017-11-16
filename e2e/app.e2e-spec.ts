import { ShopListPage } from './app.po';

describe('shop-list App', () => {
  let page: ShopListPage;

  beforeEach(() => {
    page = new ShopListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
