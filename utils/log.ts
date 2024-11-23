export function logInfo(message: string) {
    console.log(`\x1b[36m[INFO]\x1b[0m ${message}`);
}

export function logSuccess(message: string) {
    console.log(`\x1b[32m[SUCCESS]\x1b[0m ${message}`);
}

export function logError(message: string) {
    console.log(`\x1b[31m[ERROR]\x1b[0m ${message}`);
}

export function logAction(action: string, details: string) {
    console.log(`\x1b[33m[ACTION]\x1b[0m ${action} - ${details}`);
}
