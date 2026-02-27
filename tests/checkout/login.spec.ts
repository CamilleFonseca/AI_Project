import { expect, test } from '@playwright/test';

test.describe('RPI: Checkout flow from login to order confirmation', () => {
	test('completes purchase and shows thank-you message', async ({ page }) => {
		const username = process.env.SAUCE_USERNAME ?? 'standard_user';
		const password = process.env.SAUCE_PASSWORD ?? 'secret_sauce';

		await test.step('01-02: Access page and login', async () => {
			await page.goto('https://www.saucedemo.com/', { waitUntil: 'load' });

			await expect(page.getByPlaceholder('Username')).toBeVisible();
			await expect(page.getByPlaceholder('Password')).toBeVisible();
			await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

			await page.getByPlaceholder('Username').fill(username);
			await page.getByPlaceholder('Password').fill(password);
			await page.getByRole('button', { name: 'Login' }).click();

			await expect(page).toHaveURL(/.*inventory\.html/);
			await expect(page.getByText('Products')).toBeVisible();
		});

		await test.step('03: Add Sauce Labs Backpack to cart', async () => {
			const backpackItem = page.locator('[data-test="inventory-item"]').filter({
				has: page.getByRole('link', { name: 'Sauce Labs Backpack' }),
			});
			await backpackItem.getByRole('button', { name: 'Add to cart' }).click();
			await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
		});

		await test.step('04-05: Open cart and confirm product is shown', async () => {
			await page.locator('[data-test="shopping-cart-link"]').click();

			await expect(page).toHaveURL(/.*cart\.html/);
			await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');
			await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
		});

		await test.step('06-08: Checkout and continue with personal data', async () => {
			await page.getByRole('button', { name: 'Checkout' }).click();

			await expect(page).toHaveURL(/.*checkout-step-one\.html/);
			await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information');

			await page.getByPlaceholder('First Name').fill('Username');
			await page.getByPlaceholder('Last Name').fill('Second name');
			await page.getByPlaceholder('Zip/Postal Code').fill('38400000');

			await page.getByRole('button', { name: 'Continue' }).click();

			await expect(page).toHaveURL(/.*checkout-step-two\.html/);
			await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
			await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
		});

		await test.step('09-10: Finish and verify order success message', async () => {
			await page.getByRole('button', { name: 'Finish' }).click();

			await expect(page).toHaveURL(/.*checkout-complete\.html/);
			await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Complete!');
			await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
		});
	});
});
