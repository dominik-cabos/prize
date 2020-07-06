import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getBonusInfo(): Promise<string> {
    return element(by.css('.bonus-panel h1')).getText() as Promise<string>;
  }
}
