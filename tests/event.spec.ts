import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const eventPath = "/eventos/descubriendo-perfumes-gourmand/";
const pastEventPath = "/eventos/descubriendo-perfumes-nicho/";

test.describe("HTML estático", () => {
test.use({ javaScriptEnabled: false });

test("abre la ficha desde la portada y vuelve a las secciones del club", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Eventos", exact: true }).click();
  await expect(page.getByRole("link", { name: "Descubriendo perfumes gourmand", exact: true })).toHaveAttribute("href", eventPath);
  await page.getByRole("link", { name: "Descubriendo perfumes gourmand", exact: true }).click();
  await expect(page).toHaveURL(new RegExp(`${eventPath}$`));
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Descubriendo perfumes gourmand");
  await expect(page.getByRole("main")).toContainText("Barcelona Perfume Club");
  await expect(page.getByRole("main")).toContainText("22 de noviembre de 2026");
  await expect(page.getByRole("main")).toContainText("11:30–13:30 h");
  await expect(page.getByRole("main")).toContainText("Saisei");
  await expect(page.getByRole("link", { name: "Solicitar plaza en Luma", exact: true }))
    .toHaveAttribute("href", "https://luma.com/7qk1bbin");
  await page.getByRole("navigation", { name: "Principal" }).getByRole("link", { name: "El club", exact: true }).click();
  await expect(page).toHaveURL(/\/#el-club$/);
  await expect(page.getByRole("heading", { name: "Un perfume club en Barcelona", exact: true })).toBeInViewport();
});

test("sirve la ficha y su SEO sin JavaScript con una identidad común", async ({ page, request }) => {
  await page.goto(eventPath);
  await expect(page).toHaveTitle("Descubriendo perfumes gourmand en Barcelona | Barcelona Perfume Club");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://barcelonaperfumeclub.com${eventPath}`);
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", `https://barcelonaperfumeclub.com${eventPath}`);
  const description = await page.locator('meta[name="description"]').getAttribute("content");
  expect(description).toContain("22 de noviembre");
  const structuredData = await page.locator('script[type="application/ld+json"]').allTextContents();
  const entities = structuredData.flatMap(text => {
    const value = JSON.parse(text);
    return value["@graph"] ?? [value];
  });
  const organization = entities.find(entity => entity["@type"] === "Organization");
  expect(organization.name).toBe("Barcelona Perfume Club");
  expect(organization.url).toBe("https://barcelonaperfumeclub.com/");
  expect(organization.sameAs).toContain("https://luma.com/barcelonaperfumeclub");
  expect(entities.find(entity => entity["@type"] === "WebSite").name).toBe("Barcelona Perfume Club");
  expect(entities.find(entity => entity["@type"] === "WebPage").url).toBe(`https://barcelonaperfumeclub.com${eventPath}`);
  expect(entities.some(entity => entity["@type"] === "BreadcrumbList")).toBe(true);
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).toContain(`<loc>https://barcelonaperfumeclub.com${eventPath}</loc>`);
});
});

test("mantiene el cartel, las condiciones de acceso y la accesibilidad de la ficha", async ({ page }) => {
  await page.goto(eventPath);
  const poster = page.getByRole("main").getByRole("img");
  await poster.scrollIntoViewIfNeeded();
  await expect(poster).toHaveJSProperty("complete", true);
  expect(await poster.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
  const access = page.getByRole("complementary", { name: "Requisitos de acceso" });
  await access.scrollIntoViewIfNeeded();
  await expect(access).toContainText("Registro obligatorio en Luma");
  await expect(access).toContainText("Sin registro y confirmación no se podrá acceder.");
  await expect(access).toHaveCSS("background-color", "rgb(243, 238, 224)");
  expect(await page.evaluate(() => document.querySelector("main")!.scrollWidth <= document.querySelector("main")!.clientWidth)).toBe(true);
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
});

test("el primer encuentro conserva su enlace y muestra tres fotos sin ofrecer inscripción", async ({ page }) => {
  await page.goto(pastEventPath);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Descubriendo perfumes nicho");
  await expect(page.getByRole("link", { name: "Ver ficha en Luma" })).toHaveAttribute("href", "https://luma.com/tdhs6lr0");
  await expect(page.getByRole("link", { name: "Solicitar plaza en Luma" })).toHaveCount(0);
  const photos = page.getByRole("region", { name: "Fotos del encuentro" }).getByRole("img");
  await expect(photos).toHaveCount(3);
  for (const photo of await photos.all()) {
    await photo.scrollIntoViewIfNeeded();
    await expect.poll(() => photo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  }
  expect(await page.evaluate(() => document.querySelector("main")!.scrollWidth <= document.querySelector("main")!.clientWidth)).toBe(true);
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
});
