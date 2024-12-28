import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto('https://authentication.auto1.clarityfalcon.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dclarity-web-api-spa-client%26redirect_uri%3Dhttps%253A%252F%252Fauto1.clarityfalcon.com%252Fsignin-callback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520phone%2520user-info%2520IdentityServerApi%2520web-api-access%26state%3D315c4891a07c4274a7ca75bbce40f02a%26code_challenge%3DXVRlt-KLU_wuLAf4OvlwKEmAapG3QoE-yBLDOtd7plc%26code_challenge_method%3DS256');
  await page.getByPlaceholder('Enter your email').fill('admin@clarity.com');
  await page.getByPlaceholder('Enter your password').fill('Clr2021!1234');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'User / profile menu' }).click();
  await page.getByRole('menuitem', { name: 'Admin panel' }).getByTestId('adminPanelMenuItem').click();
  await page.getByRole('cell', { name: 'QAA1312123104570Williamson,' }).click();
  await page.getByTestId('dataCaptureTab').click();
  await expect(page.getByTestId('id_74072').locator('span')).toContainText('DCefevc');
  await expect(page.getByText('DCefevc')).toBeVisible();
});