import { club, events } from "./content";

export function normalizePathname(pathname: string) {
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function getStaticPages() {
  return ["/", ...events.map((event) => event.path)];
}

export function getPageMetadata(pathname: string) {
  const path = normalizePathname(pathname);
  const event = events.find((event) => event.path === path);
  if (path !== "/" && !event) throw new Error(`Página no definida: ${path}`);
  const canonical = new URL(path, club.url).href;
  const title = event
    ? `${event.title} en Barcelona | ${club.name}`
    : `${club.name} | Comunidad y eventos de perfumería`;
  const description = event
    ? `Descubre perfumes nicho en Barcelona el ${event.dateLabel} en ${event.venue}. Acceso con registro y plaza confirmada en Luma.`
    : "Comunidad de Barcelona para amantes de la perfumería. Descubre nuestros eventos, comparte tu afición y apúntate al próximo encuentro en Luma.";
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${club.url}#organization`,
    name: club.name,
    url: club.url,
    description: club.description,
    logo: new URL("/media/og-logo.jpg", club.url).href,
    areaServed: { "@type": "City", name: "Barcelona" },
    email: club.links.contact.replace("mailto:", ""),
    sameAs: [club.links.instagram, club.links.tiktok, club.links.calendar].filter(Boolean),
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${club.url}#website`,
    name: club.name,
    url: club.url,
    inLanguage: "es",
    publisher: { "@id": organization["@id"] },
  };
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    name: title,
    description,
    url: canonical,
    inLanguage: "es",
    isPartOf: { "@id": website["@id"] },
    about: { "@id": organization["@id"] },
  };
  const structuredData: object[] = [organization, website, webpage];
  if (event) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: club.name, item: club.url },
        { "@type": "ListItem", position: 2, name: event.title, item: canonical },
      ],
    });
  }
  return { path, canonical, title, description, structuredData, registrationUrl: event?.url };
}
