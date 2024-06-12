import { test, expect, type Page } from '@playwright/test';

test.describe.configure({mode : 'serial'});

let page: Page

test.beforeAll(async ({browser})=>{
  page = await browser.newPage();
})

test('run check test', async () => {
  await page.goto('https://playwright.dev/')
})