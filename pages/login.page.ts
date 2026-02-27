import { expect, Locator, Page } from '@playwright/test';

export interface LoginCredentials {
  username: string;
  password: string;
}

export const createLoginPage = (page: Page) => {
  const usernameInput: Locator = page.getByRole('textbox', { name: 'Username' });
  const passwordInput: Locator = page.getByRole('textbox', { name: 'Password' });
  const loginButton: Locator = page.getByRole('button', { name: 'Login' });
  const pageTitle: Locator = page.locator('[data-test="title"]');
  const errorMessage: Locator = page.locator('[data-test="error"]');

  const goto = async (): Promise<void> => {
    await page.goto('https://www.saucedemo.com/', { waitUntil: 'load' });
    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(loginButton).toBeVisible();
  };

  const login = async (credentials: LoginCredentials): Promise<void> => {
    await usernameInput.fill(credentials.username);
    await passwordInput.fill(credentials.password);
    await loginButton.click();
  };

  const submitEmptyCredentials = async (): Promise<void> => {
    await loginButton.click();
  };

  const expectInventoryLoaded = async (): Promise<void> => {
    await expect(page).toHaveURL(/.*inventory\.html/);
    await expect(pageTitle).toHaveText('Products');
  };

  const expectErrorContains = async (messagePart: string): Promise<void> => {
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(messagePart);
  };

  return {
    goto,
    login,
    submitEmptyCredentials,
    expectInventoryLoaded,
    expectErrorContains,
  };
};
