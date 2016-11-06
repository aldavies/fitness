import { FitnessPage } from './app.po';

describe('fitness App', function() {
  let page: FitnessPage;

  beforeEach(() => {
    page = new FitnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
