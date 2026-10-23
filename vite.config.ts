import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const { UMAMI_WEBSITE_ID } = loadEnv(mode, process.cwd(), "UMAMI_");

  return {
    plugins: [
      react(),
      {
        name: "umami-cloud",
        apply: "build",
        transformIndexHtml() {
          if (!UMAMI_WEBSITE_ID?.trim()) return [];

          return [
            {
              tag: "script",
              attrs: {
                defer: true,
                src: "https://cloud.umami.is/script.js",
                "data-website-id": UMAMI_WEBSITE_ID.trim(),
                "data-domains":
                  "barcelonaperfumeclub.com,www.barcelonaperfumeclub.com",
                "data-exclude-hash": "true",
                "data-do-not-track": "true",
              },
              injectTo: "head" as const,
            },
          ];
        },
      },
    ],
  };
});
