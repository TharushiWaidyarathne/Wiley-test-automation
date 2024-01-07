import { test, expect } from '@playwright/test';

//verify login function 

test('Log In', async ({ page }) => {
  // navigate to Wiley online library website
  await page.goto('https://onlinelibrary.wiley.com/');

  // click on login / register button
  await page.getByText('Login / Register').click();

  //identify the popup and enter username, password and click on login button
  await page.locator('.popup.login-popup').getByPlaceholder('Enter your email').fill('demo@yopmail.com');
  await page.locator('.popup.login-popup').getByPlaceholder('Enter your password').fill('Demo@123456');
  await page.locator('.popup.login-popup').getByRole('button', { name: 'Log In' }).click();

  //verify the user is logged in successfully
  await expect(page.getByText('Demo')).toBeVisible();
})

// verify register function

test('Register', async ({page }) => {
  
})