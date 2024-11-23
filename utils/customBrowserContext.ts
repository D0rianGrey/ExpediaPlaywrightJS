import { Browser, chromium, Page } from '@playwright/test';

export async function createCustomPage(): Promise<Page> {
    const browser: Browser = await chromium.launch({
        headless: false,
    });

    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        viewport: { width: 1280, height: 720 },
        javaScriptEnabled: true,
        permissions: ['geolocation'],
    });

    await context.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
        (window.navigator as any).chrome = { runtime: {} };
        (navigator as any).permissions.query = (parameters: any) =>
            parameters.name === 'notifications'
                ? Promise.resolve({ state: 'granted' })
                : Promise.reject(new Error('Permission denied'));
    });


    return context.newPage();
}
