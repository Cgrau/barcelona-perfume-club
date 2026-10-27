import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("anuncia el primer evento, el objetivo del club y los contactos reales", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "El perfume se disfruta más en compañía.",
  );
  await expect(
    page.getByText("Perfume, conversación y comunidad", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Apúntate al primer evento", exact: true }),
  ).toHaveAttribute("href", "https://luma.com/tdhs6lr0");
  await expect(
    page.getByText("Nuestro primer evento ya tiene fecha.", { exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "El club", exact: true }).click();
  const about = page.getByRole("region", { name: "El club" });
  await expect(about).toBeVisible();
  await expect(about).toContainText("Nuestro objetivo");
  await expect(about).toContainText("descubrir marcas");
  for (const title of ["Descubrir", "Compartir", "Conectar"]) {
    await expect(
      about.getByRole("heading", { name: title, exact: true }),
    ).toBeVisible();
  }
  const events = page.getByRole("region", {
    name: "Próximos eventos",
    exact: true,
  });
  await page.getByRole("link", { name: "Eventos", exact: true }).click();
  await expect(events.getByRole("heading", { level: 2 })).toBeInViewport();
  const event = events.getByRole("article", { name: "Descubriendo perfumes nicho" });
  await expect(event).toContainText("8 de noviembre de 2026");
  await expect(event).toContainText("12:00");
  await expect(event).toContainText("Volta Restaurant & Bar");
  await expect(event).toContainText("Passeig de Picasso, 26, Barcelona");
  const poster = event.getByRole("img");
  await poster.scrollIntoViewIfNeeded();
  await expect(poster).toHaveJSProperty("complete", true);
  expect(await poster.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
  await expect(event.getByRole("link", { name: "Ver evento en Luma", exact: true }))
    .toHaveAttribute("href", "https://luma.com/tdhs6lr0");
  await expect(
    events.getByRole("link", { name: "Ver calendario", exact: true }),
  ).toHaveAttribute("href", "https://luma.com/barcelonaperfumeclub");
  await expect(
    page.getByRole("link", { name: "Eventos", exact: true }),
  ).toHaveAttribute("href", "#eventos");
  await expect(
    page.getByRole("link", { name: "Contacto", exact: true }),
  ).toHaveAttribute("href", "mailto:barcelonaperfumeclub@proton.me");
  await expect(
    page.getByRole("link", {
      name: "barcelonaperfumeclub@proton.me",
      exact: true,
    }),
  ).toHaveAttribute("href", "mailto:barcelonaperfumeclub@proton.me");
  await expect(
    page.getByText(
      "¿Tienes alguna consulta o una idea para colaborar? Nos encantará leerte.",
    ),
  ).toBeVisible();
  const social = page.getByRole("navigation", { name: "Redes sociales" });
  await expect(
    social.getByRole("link", { name: "Instagram", exact: true }),
  ).toHaveAttribute("href", "https://www.instagram.com/barcelonaperfumeclub/");
  await expect(
    social.getByRole("link", { name: "TikTok", exact: true }),
  ).toHaveAttribute("href", "https://www.tiktok.com/@barcelonaperfumeclub");
});

test("solo el contenido central se desplaza y la cabecera y las redes permanecen visibles", async ({
  page,
}) => {
  await page.goto("/");
  const main = page.getByRole("main");
  const header = page.getByRole("banner");
  const footer = page.getByRole("contentinfo");
  const beforeHeader = (await header.boundingBox())!;
  const beforeFooter = (await footer.boundingBox())!;
  await main.hover();
  await page.mouse.wheel(0, 650);
  await expect
    .poll(() => main.evaluate((element) => element.scrollTop))
    .toBeGreaterThan(0);
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
  expect(await header.boundingBox()).toEqual(beforeHeader);
  expect(await footer.boundingBox()).toEqual(beforeFooter);
  expect(Math.round(beforeFooter.y + beforeFooter.height)).toBe(
    page.viewportSize()!.height,
  );
  await expect(
    footer.getByRole("link", { name: "Instagram", exact: true }),
  ).toBeInViewport();
  await expect(
    footer.getByRole("link", { name: "TikTok", exact: true }),
  ).toBeInViewport();
  await expect(
    footer.getByRole("link", {
      name: "barcelonaperfumeclub@proton.me",
      exact: true,
    }),
  ).toHaveCount(0);
  await header.getByRole("link", { name: "El club", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "El club", exact: true }),
  ).toBeInViewport();
  await header
    .getByRole("link", { name: "Barcelona Perfume Club, inicio", exact: true })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
  await main.focus();
  await page.keyboard.press("End");
  await expect(
    page.getByRole("link", {
      name: "barcelonaperfumeclub@proton.me",
      exact: true,
    }),
  ).toBeInViewport();
});

test("el logo carga y la landing es accesible y estática también en móvil", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const logo = page.getByRole("img", { name: "Barcelona Perfume Club", exact: true });
  await expect(logo).toBeVisible();
  await expect(logo).toHaveJSProperty("complete", true);
  expect(
    await logo.evaluate((image: HTMLImageElement) => image.naturalWidth),
  ).toBeGreaterThan(0);
  const logoCornerAlpha = await logo.evaluate((image: HTMLImageElement) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext("2d")!;
    context.drawImage(image, 0, 0);
    return [
      [0, 0],
      [canvas.width - 1, 0],
      [0, canvas.height - 1],
      [canvas.width - 1, canvas.height - 1],
    ].map(([x, y]) => context.getImageData(x, y, 1, 1).data[3]);
  });
  expect(logoCornerAlpha).toEqual([0, 0, 0, 0]);
  await expect(page.getByRole("main").locator("img")).toHaveCount(1);
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
