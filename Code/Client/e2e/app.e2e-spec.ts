import { FamilywebsitePage } from './app.po';

describe('familywebsite App', () => {
  let page: FamilywebsitePage;

  beforeEach(() => {
    page = new FamilywebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
