import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [['html', {open: 'never'}]],
    use: {
        trace: 'on-first-retry',
        baseURL: 'https://www.expedia.com',
        headless: process.env.HEADLESS === 'true'
    },
    projects: [
        {
            name: 'Google Chrome',
            use: {...devices['Desktop Chrome'], channel: 'chrome'},
        },
    ],
});
