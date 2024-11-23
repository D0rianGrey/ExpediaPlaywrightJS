import { test as baseTest } from '@playwright/test';
import { BrowserContext, Page } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

type CustomFixtures = {
    customPage: Page;
    mainPage: MainPage;
};

export const test = baseTest.extend<CustomFixtures>({
    customPage: async ({ browser }, use) => {
        const context: BrowserContext = await browser.newContext({
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            viewport: { width: 1280, height: 720 },
        });

        await context.addInitScript(() => {
            Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
            (window.navigator as any).chrome = { runtime: {} };
        });

        const page = await context.newPage();
        await use(page);
        await context.close();
    },

    mainPage: async ({ customPage }, use) => {
        const mainPage = new MainPage(customPage);
        await use(mainPage);
    },
});
