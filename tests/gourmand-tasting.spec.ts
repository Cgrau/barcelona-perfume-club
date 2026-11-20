import { expect, test } from "@playwright/test";
import gourmand from "../src/tastings/gourmand.json" with { type: "json" };

test.use({ javaScriptEnabled: false });

test("muestra la guía del QR con las muestras en el orden de la cata", async ({ page }) => {
  const response = await page.goto(gourmand.path);
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Perfumes de la cata gourmand");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");

  const list = page.getByRole("list");
  await expect(list.getByRole("listitem")).toHaveCount(11);
  for (const [index, perfume] of gourmand.perfumes.entries()) {
    const entry = list.getByRole("listitem").nth(index);
    await expect(entry.locator(".gourmand-tasting-number")).toHaveText(String(index + 1));
    await expect(entry.getByRole("link", { name: perfume.name })).toHaveAttribute("href", perfume.source);
    await expect(entry.getByText(perfume.brand, { exact: true })).toBeVisible();
    await expect(entry.getByText(perfume.notes, { exact: true })).toBeVisible();
  }
  const hasHorizontalOverflow = await page.locator("main").evaluate((main) => main.scrollWidth > main.clientWidth);
  expect(hasHorizontalOverflow).toBe(false);
});
