const desktop = process.env.LHCI_FORM_FACTOR === "desktop";

module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      // Audit the landing, not the custom 404 document.
      url: ["http://localhost/"],
      numberOfRuns: 3,
      settings: {
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
        blockedUrlPatterns: ["*://cloud.umami.is/*"],
        ...(desktop ? { preset: "desktop" } : {}),
      },
    },
    assert: {
      assertions: {
        "categories:seo": ["error", { minScore: 1 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.95 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: `./build/lighthouse/${desktop ? "desktop" : "mobile"}`,
    },
  },
};
