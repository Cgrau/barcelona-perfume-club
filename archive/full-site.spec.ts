import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("la flecha conserva el foco durante y después del giro", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const next = page.getByRole("button", { name: "Tarjeta siguiente" });
  await next.scrollIntoViewIfNeeded();
  await next.focus();
  await page.keyboard.press("Enter");
  await expect(next).toHaveAttribute("aria-disabled", "true");
  await expect(next).toBeFocused();
  await expect(next).toHaveAttribute("aria-disabled", "false");
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("heading", { name: "Cenas olfativas", exact: true }),
  ).toBeVisible();
  await expect(next).toBeFocused();
});

test("el menú contiene el foco, se cierra con Escape y devuelve el foco", async ({
  page,
}) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Abrir menú" });
  await toggle.click();
  const menu = page.getByRole("dialog", { name: "Menú principal" });
  await expect(menu).toBeVisible();
  await page.keyboard.press("Shift+Tab");
  await expect(menu.getByRole("button", { name: "Contacto" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(menu.getByRole("button", { name: "Cerrar menú" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
  await expect(toggle).toBeFocused();
});

test("las tarjetas avanzan con flechas, retroceden y vuelven al principio", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const slider = page.getByRole("region", { name: "Formas de vivir el club" });
  await slider.scrollIntoViewIfNeeded();
  await slider.focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    slider.getByRole("heading", { name: "Descubrimientos", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(slider.getByText("MUY PRONTO", { exact: true })).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(
    slider.getByRole("heading", { name: "Encuentros", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("ArrowLeft");
  await expect(
    slider.getByRole("heading", { name: "Cenas olfativas", exact: true }),
  ).toBeVisible();
});

test("no inventa enlaces y explica qué dato falta", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Calendario", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Calendario" });
  await expect(dialog).toContainText("TODO: URL de Luma");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(
    page.locator('a[href*="luma"], a[href^="mailto:"], a[href*="instagram"]'),
  ).toHaveCount(0);
});

test("reduced motion mantiene el contenido legible y sin desbordamiento", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator(".manifesto-word").first()).toHaveCSS(
    "opacity",
    "1",
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});

test("un gesto horizontal cambia la tarjeta sin bloquear el desplazamiento vertical", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const slider = page.getByRole("region", { name: "Formas de vivir el club" });
  await slider.scrollIntoViewIfNeeded();
  const deck = page.locator(".card-deck");
  await deck.dispatchEvent("touchstart", {
    touches: [{ clientX: 270, clientY: 240 }],
  });
  await deck.dispatchEvent("touchend", {
    changedTouches: [{ clientX: 60, clientY: 245 }],
  });
  await expect(
    slider.getByRole("heading", { name: "Descubrimientos", exact: true }),
  ).toBeVisible();
  await deck.dispatchEvent("touchstart", {
    touches: [{ clientX: 200, clientY: 300 }],
  });
  await deck.dispatchEvent("touchend", {
    changedTouches: [{ clientX: 190, clientY: 100 }],
  });
  await expect(
    slider.getByRole("heading", { name: "Descubrimientos", exact: true }),
  ).toBeVisible();
});
