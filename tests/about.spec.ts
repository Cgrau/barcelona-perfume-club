import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const aboutPath = "/sobre-el-club/";

test.describe("About estático", () => {
  test.use({ javaScriptEnabled: false });

  test("abre la historia del club y sus organizadores desde la navegación", async ({ page }) => {
    await page.goto("/");
    const menu = page.getByRole("navigation", { name: "Principal" });
    await expect(menu.getByRole("link").first()).toHaveText("Inicio");
    await menu.getByRole("link", { name: "El club", exact: true }).click();
    await expect(page).toHaveURL(/\/#el-club$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("El perfume se disfruta más en compañía.");
    await expect(page.getByRole("main")).not.toContainText("Carles y Laura");
    const aboutLink = menu.getByRole("link", { name: "Quiénes somos", exact: true });
    await expect(aboutLink).toHaveAttribute("href", aboutPath);
    await aboutLink.click();
    await expect(page).toHaveURL(new RegExp(`${aboutPath}$`));
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("El perfume nos reúne.");
    const main = page.getByRole("main");
    await expect(main).toContainText("Carles y Laura");
    await expect(main).toContainText("Carles Grau Perfume");
    await expect(main).toContainText("visión de negocio");
    await expect(main).toContainText("gourmand");
    await expect(main).toContainText("cuero");
    await expect(main.getByRole("link", { name: "Instagram de Carles Grau Perfume" })).toHaveAttribute("href", "https://www.instagram.com/carles.grau.perfume/");
    await expect(main.getByRole("link", { name: "TikTok de Carles Grau Perfume" })).toHaveAttribute("href", "https://www.tiktok.com/@carles.grau");
    await expect(main.getByRole("link", { name: "YouTube de Carles Grau Perfume" })).toHaveAttribute("href", "https://www.youtube.com/@carles.grau.perfume");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://barcelonaperfumeclub.com${aboutPath}`);
    const entities = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(text => JSON.parse(text));
    expect(entities.some(entity => entity["@type"] === "AboutPage")).toBe(true);
    const organization = entities.find(entity => entity["@type"] === "Organization");
    expect(organization.sameAs).not.toContain("https://www.tiktok.com/@carles.grau");
    await menu.getByRole("link", { name: "Inicio", exact: true }).click();
    await expect(page).toHaveURL(/\/#inicio$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("El perfume se disfruta más en compañía.");
    await expect(page.getByRole("link", { name: "Apúntate al primer evento", exact: true })).toHaveAttribute("href", "https://luma.com/tdhs6lr0");
    await aboutLink.click();
    await page.getByRole("navigation", { name: "Principal" }).getByRole("link", { name: "Eventos", exact: true }).click();
    await expect(page).toHaveURL(/\/#eventos$/);
    await expect(page.getByRole("heading", { name: "Próximos eventos", exact: true })).toBeInViewport();
  });
});

test("el About es accesible y mantiene la cabecera y redes en móvil y escritorio", async ({ page }) => {
  await page.goto(aboutPath);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("El perfume nos reúne.");
  const main = page.getByRole("main");
  const portrait = main.getByRole("img", { name: "Carles Grau, de Carles Grau Perfume" });
  await portrait.scrollIntoViewIfNeeded();
  await expect.poll(() => portrait.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  const header = page.getByRole("banner");
  const footer = page.getByRole("contentinfo");
  const beforeHeader = await header.boundingBox();
  const beforeFooter = await footer.boundingBox();
  await main.focus();
  await page.keyboard.press("End");
  await expect(page.getByRole("link", { name: "Ver próximos encuentros", exact: true })).toBeInViewport();
  expect(await header.boundingBox()).toEqual(beforeHeader);
  expect(await footer.boundingBox()).toEqual(beforeFooter);
  expect(await page.evaluate(() => document.querySelector("main")!.scrollWidth <= document.querySelector("main")!.clientWidth)).toBe(true);
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
});
