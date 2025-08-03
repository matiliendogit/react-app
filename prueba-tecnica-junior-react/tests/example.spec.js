// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:5173/";
const CAT_IMG_BASE_URL = "https://cataas.com/cat/";

test("app shows random cat facts and render a image with de first dos words of that fact", async ({
  page,
}) => {
  await page.goto(LOCALHOST_URL);

  // Check if the fact is displayed
  const factElement = page.getByRole("paragraph");
  const factText = await factElement.textContent();

  expect(factText?.length).toBeGreaterThan(0);

  // Check if the image is displayed
  const imageElement = page.getByRole("img");
  const imageUrl = await imageElement.getAttribute("src");

  expect(imageUrl?.startsWith(CAT_IMG_BASE_URL)).toBeTruthy();

  // Check if the reload button is visible and clickable
  const reloadButton = page.getByRole("button");
  await reloadButton.click();
  const newFactText = await factElement.textContent();

  expect(newFactText?.length).toBeGreaterThan(0);
  expect(newFactText).not.toEqual(factText); // Ensure the fact has changed
  const newImageUrl = await imageElement.getAttribute("src");

  expect(newImageUrl).not.toEqual(imageUrl); // Ensure the image has changed
  expect(newImageUrl?.startsWith(CAT_IMG_BASE_URL)).toBeTruthy();
  await expect(page.locator(".loader")).toHaveCount(0); // Ensure no loader
});
