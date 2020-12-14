import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a MEAN title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('MEAN');
  });

  it('should show the sidebar', () => {
    page.navigateTo();
    let menuButton = element(by.css("#menuButton"));
    menuButton.click();
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
