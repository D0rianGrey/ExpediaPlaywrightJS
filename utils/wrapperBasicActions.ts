import { Locator } from '@playwright/test';
import { logInfo, logSuccess, logError, logAction } from '../utils/log';

export async function clickElement(locator: Locator, description: string) {
    logInfo(`[CLICK]: Attempting to click on ${description}`);
    try {
        await locator.click();
        logSuccess(`[CLICK SUCCESS]: Clicked on ${description}`);
    } catch (error) {
        logError(`[CLICK ERROR]: Failed to click on ${description}. Error: ${error}`);
        throw error;
    }
}
