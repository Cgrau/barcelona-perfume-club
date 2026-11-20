import { renderToString } from "react-dom/server";
import App from "./App";
import { club } from "./content";
import GourmandTastingPage from "./GourmandTastingPage";
import gourmand from "./tastings/gourmand.json";

export { getStaticPages, getPageMetadata } from "./seo";

export function render(pathname = "/") {
  return renderToString(<App pathname={pathname} />);
}

export const gourmandTastingPage = {
  path: gourmand.path,
  title: `Perfumes de la cata gourmand | ${club.name}`,
  description: "Nombres, marcas y notas de las once muestras de la cata gourmand.",
  canonical: new URL(gourmand.path, club.url).href,
  structuredData: [],
};

export function renderGourmandTasting() {
  return renderToString(<GourmandTastingPage />);
}
