import { expect, test } from '@playwright/test';

// End-to-end test: covers a full checkout flow starting from login
// The test uses semantic locators and assertion-driven waits per governance.
test.describe('RPI: Checkout flow from login to order confirmation', () => {
	// Single spec that completes a purchase and asserts the thank-you message
	test('completes purchase and shows thank-you message', async ({ page }) => {
		// Credentials are read from env when available to support CI secrets
		const username = process.env.SAUCE_USERNAME ?? 'standard_user';
		const password = process.env.SAUCE_PASSWORD ?? 'secret_sauce';

		// 01-02: Navigate to the app and perform login
		await test.step('01-02: Access page and login', async () => {
			// Ensure homepage loads fully before interacting
			await page.goto('https://www.saucedemo.com/', { waitUntil: 'load' });

			// Assert key inputs and the login button are visible
			await expect(page.getByPlaceholder('Username')).toBeVisible();
			await expect(page.getByPlaceholder('Password')).toBeVisible();
			await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

			// Fill and submit the login form
			await page.getByPlaceholder('Username').fill(username);
			await page.getByPlaceholder('Password').fill(password);
			await page.getByRole('button', { name: 'Login' }).click();

			// Confirm navigation to inventory and that products are shown
			await expect(page).toHaveURL(/.*inventory\.html/);
			await expect(page.getByText('Products')).toBeVisible();
		});

		// 03: Add the Sauce Labs Backpack to the cart
		await test.step('03: Add Sauce Labs Backpack to cart', async () => {
			// Use a scoped locator to find the specific inventory item row
			const backpackItem = page.locator('[data-test="inventory-item"]').filter({
				has: page.getByRole('link', { name: 'Sauce Labs Backpack' }),
			});
			// Click the Add to cart button inside the matched item
			await backpackItem.getByRole('button', { name: 'Add to cart' }).click();
			// Verify the cart badge updated to show 1 item
			await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
		});

		// 04-05: Open the cart and verify selected product is present
		await test.step('04-05: Open cart and confirm product is shown', async () => {
			await page.locator('[data-test="shopping-cart-link"]').click();

			// Confirm we reached the cart page and title matches expectation
			await expect(page).toHaveURL(/.*cart\.html/);
			await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');
			await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
		});

		// 06-08: Proceed to checkout and enter personal information
		await test.step('06-08: Checkout and continue with personal data', async () => {
			// Start checkout flow from cart
			await page.getByRole('button', { name: 'Checkout' }).click();

			// Verify first checkout step (information) is displayed
			await expect(page).toHaveURL(/.*checkout-step-one\.html/);
			await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information');

			// Fill in the required customer details
			await page.getByPlaceholder('First Name').fill('Username');
			await page.getByPlaceholder('Last Name').fill('Second name');
			await page.getByPlaceholder('Zip/Postal Code').fill('38400000');

			// Continue to the overview page and verify the product is listed
			await page.getByRole('button', { name: 'Continue' }).click();

			await expect(page).toHaveURL(/.*checkout-step-two\.html/);
			await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
			await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
		});

		// 09-10: Finish checkout and assert order completion message
		await test.step('09-10: Finish and verify order success message', async () => {
			// Complete the order
			await page.getByRole('button', { name: 'Finish' }).click();

			// Validate final page and success text
			await expect(page).toHaveURL(/.*checkout-complete\.html/);
			await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Complete!');
			await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
		});
	});
});
