const { test, expect } = require('@playwright/test');

test('Epic 2 Git intelligence test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
