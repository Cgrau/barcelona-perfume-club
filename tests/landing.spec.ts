import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("presenta el lanzamiento, el objetivo del club y los contactos reales", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Estamos preparándolo todo.",
  );
  await expect(
    page.getByText("El calendario de eventos saldrá muy pronto."),
  ).toBeVisible();
  await page.getByRole("link", { name: "El club", exact: true }).click();
  const about = page.getByRole("region", { name: "El club" });
  await expect(about).toBeVisible();
  await expect(about).toContainText("Nuestro objetivo");
  await expect(about).toContainText("descubrir marcas");
  await expect(
    page.getByRole("link", { name: "Encuentros", exact: true }),
  ).toHaveAttribute("href", "https://luma.com/user/usr-C04C7zKH7PXxBXM");
  await expect(
    page.getByRole("link", { name: "Contacto", exact: true }),
  ).toHaveAttribute("href", "mailto:barcelonaperfumeclub@proton.me");
  await expect(
    page.getByRole("link", {
      name: "barcelonaperfumeclub@proton.me",
      exact: true,
    }),
  ).toHaveAttribute("href", "mailto:barcelonaperfumeclub@proton.me");
  const social = page.getByRole("navigation", { name: "Redes sociales" });
  await expect(
    social.getByRole("link", { name: "Instagram", exact: true }),
  ).toHaveAttribute("href", "https://www.instagram.com/barcelonaperfumeclub/");
  await expect(
    social.getByRole("link", { name: "TikTok", exact: true }),
  ).toHaveAttribute("href", "https://www.tiktok.com/@barcelonaperfumeclub");
});

test("el logo carga y la landing es accesible y estática también en móvil", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const logo = page.getByRole("img", { name: "Barcelona Perfume Club" });
  await expect(logo).toBeVisible();
  await expect(logo).toHaveJSProperty("complete", true);
  expect(
    await logo.evaluate((image: HTMLImageElement) => image.naturalWidth),
  ).toBeGreaterThan(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(100, 8, 23)",
  );
  await expect(page.getByText(/TODO:/)).toHaveCount(0);
  await expect(page.locator("video")).toHaveCount(0);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});
