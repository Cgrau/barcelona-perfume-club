export type LinkKey = "calendar" | "instagram" | "contact";
export type Photo = { src: string; srcSet: string; alt: string };
// Completar con los datos reales del club.
export const club = {
  links: {
    calendar: "https://luma.com/user/usr-C04C7zKH7PXxBXM",
    instagram: "https://www.instagram.com/barcelonaperfumeclub/" as
      | string
      | null,
    tiktok: "https://www.tiktok.com/@barcelonaperfumeclub",
    contact: "mailto:barcelonaperfumeclub@proton.me",
  },
  logo: "/media/logo.webp",
  video: null as { mp4: string; webm?: string; poster: string } | null,
  legal: null as {
    owner: string;
    taxId: string;
    address: string;
    email: string;
  } | null,
};
export const pendingLinks: Record<LinkKey, { title: string; detail: string }> =
  {
    calendar: { title: "Calendario", detail: "TODO: URL de Luma" },
    instagram: {
      title: "Instagram",
      detail: "TODO: handle de Instagram del club",
    },
    contact: { title: "Contacto", detail: "TODO: email de contacto" },
  };
function photo(name: string, alt: string): Photo {
  return {
    src: `/media/${name}-960.webp`,
    srcSet: `/media/${name}-480.webp 480w, /media/${name}-960.webp 960w, /media/${name}-1600.webp 1600w`,
    alt,
  };
}
export const photos = {
  mouillettes: photo(
    "mouillettes",
    "Mano sosteniendo un abanico de mouillettes",
  ),
  testing: photo(
    "testing-perfumes",
    "Perfumes y mouillettes preparados para oler y compartir",
  ),
  discovery: photo(
    "discovery-sets",
    "Selección de discovery sets para descubrir perfumes en compañía",
  ),
};
export const manifesto =
  "Nuestro objetivo es crear un punto de encuentro en Barcelona para quienes aman el perfume. Queremos descubrir marcas, compartir fragancias y aprender juntos. Estamos preparando encuentros para oler, conversar y conocer a personas que sienten lo mismo.";
export const clubPurpose =
  "Nuestro objetivo es reunir en Barcelona a quienes aman el perfume. Queremos descubrir marcas, compartir fragancias y aprender juntos, en encuentros donde lo primero sea oler y disfrutar en compañía.";
export const experiences = [
  {
    title: "Encuentros",
    description:
      "Trae tu perfume y lo olemos entre todos. Primero hueles, después leemos las notas. No hace falta saber, solo tener ganas.",
    photo: photos.testing,
  },
  {
    title: "Descubrimientos",
    description:
      "Marcas que vienen a presentarse, discovery sets abiertos entre todos y algunas marcas que no encontrarás en ninguna perfumería.",
    photo: photos.discovery,
  },
  { title: "Cenas olfativas", description: null, photo: photos.mouillettes },
];
