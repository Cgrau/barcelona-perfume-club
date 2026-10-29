import { renderToString } from "react-dom/server";
import App from "./App";

export { getStaticPages, getPageMetadata } from "./seo";

export function render(pathname = "/") {
  return renderToString(<App pathname={pathname} />);
}
