export type LinkKey = "calendar" | "instagram" | "contact";
export type Photo = { src: string; srcSet: string; alt: string };
// Completar con los datos reales del club.
export const club = {
  name: "Barcelona Perfume Club",
  url: "https://barcelonaperfumeclub.com/",
  description:
    "Comunidad de Barcelona para amantes de la perfumería. Organizamos encuentros para descubrir marcas, compartir fragancias y disfrutar del perfume en compañía.",
  links: {
    calendar: "https://luma.com/barcelonaperfumeclub",
    instagram: "https://www.instagram.com/barcelonaperfumeclub/" as
      | string
      | null,
    tiktok: "https://www.tiktok.com/@barcelonaperfumeclub",
    contact: "mailto:contacto@barcelonaperfumeclub.com",
  },
  logo: "/media/logo-vector.svg",
  video: null as { mp4: string; webm?: string; poster: string } | null,
  legal: null as {
    owner: string;
    taxId: string;
    address: string;
    email: string;
  } | null,
};
export const about = {
  path: "/sobre-el-club/",
  carles: {
    name: "Carles Grau",
    project: "Carles Grau Perfume",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/carles.grau.perfume/" },
      { label: "TikTok", url: "https://www.tiktok.com/@carles.grau" },
      { label: "YouTube", url: "https://www.youtube.com/@carles.grau.perfume" },
    ],
  },
  laura: { name: "Laura" },
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
  "Nuestro objetivo es reunir en Barcelona a quienes aman el perfume. Queremos descubrir marcas, compartir fragancias y aprender juntos, en eventos donde lo primero sea oler y disfrutar en compañía.";
export type EventImage = Photo & { width: number; height: number };
export const firstEncounterPath = "/eventos/descubriendo-perfumes-nicho/";
export const firstEncounterPhoto: EventImage = {
  src: "/media/encuentro-nicho-cata-640.webp",
  srcSet: "/media/encuentro-nicho-cata-320.webp 320w, /media/encuentro-nicho-cata-640.webp 640w",
  alt: "Carles conversa con los asistentes durante la cata de perfumes",
  width: 640,
  height: 1139,
};

export type ClubEvent = {
  id: string;
  path: string;
  title: string;
  edition: string;
  status: "upcoming" | "past";
  introduction: string;
  detail: string;
  dateTime: string;
  dateLabel: string;
  timeLabel: string;
  endTimeLabel: string;
  venue: string;
  address: string;
  description: (string | { text: string; url: string })[];
  image: EventImage;
  gallery?: EventImage[];
  url: string;
};

// Añadir los encuentros de Luma con su cartel local, en orden de fecha.
export const events: ClubEvent[] = [
  {
    id: "tdhs6lr0",
    path: firstEncounterPath,
    title: "Descubriendo perfumes nicho",
    edition: "Primer encuentro",
    status: "past",
    introduction:
      "Una sesión de perfumería en Barcelona para descubrir fragancias de Sasva y Gparfums, compartir impresiones y conocer al club.",
    detail:
      "Así fue el primer encuentro del club: Carles Grau guio la sesión y compartimos lo que nos sugería cada fragancia.",
    dateTime: "2026-11-08T12:00:00+01:00",
    dateLabel: "8 de noviembre de 2026",
    timeLabel: "12:00",
    endTimeLabel: "13:30",
    venue: "Volta Restaurant & Bar",
    address: "Passeig de Picasso, 26, Barcelona",
    description: [
      "Descubrimos los 6 perfumes de ",
      { text: "Sasva", url: "https://www.instagram.com/sasvaparfums/" },
      " y los 10 de ",
      { text: "Gparfums", url: "https://www.instagram.com/gparfums/" },
      " junto a Carles Grau. Una sesión para oler, compartir impresiones y explorar la perfumería nicho en compañía.",
    ],
    image: {
      src: "/media/descubriendo-perfumes-nicho-960.webp",
      srcSet:
        "/media/descubriendo-perfumes-nicho-480.webp 480w, /media/descubriendo-perfumes-nicho-960.webp 960w",
      alt: "Cartel de Descubriendo perfumes nicho, primer encuentro de Barcelona Perfume Club",
      width: 960,
      height: 1200,
    },
    gallery: [
      {
        src: "/media/encuentro-nicho-muestras-960.webp",
        srcSet: "/media/encuentro-nicho-muestras-480.webp 480w, /media/encuentro-nicho-muestras-960.webp 960w",
        alt: "Estuches de muestras y tiras olfativas sobre una mesa verde",
        width: 960,
        height: 540,
      },
      firstEncounterPhoto,
      {
        src: "/media/encuentro-nicho-mesa-640.webp",
        srcSet: "/media/encuentro-nicho-mesa-320.webp 320w, /media/encuentro-nicho-mesa-640.webp 640w",
        alt: "Asistentes a la cata sentados alrededor de las mesas del Volta",
        width: 640,
        height: 1139,
      },
    ],
    url: "https://luma.com/tdhs6lr0",
  },
  {
    id: "7qk1bbin",
    path: "/eventos/descubriendo-perfumes-gourmand/",
    title: "Descubriendo perfumes gourmand",
    edition: "Segundo encuentro",
    status: "upcoming",
    introduction:
      "Una cata a ciegas en Barcelona para descubrir perfumes que recuerdan a postres y dulces.",
    detail:
      "Carles Grau guiará la cata. Iremos oliendo los perfumes a ciegas para comentar qué nos recuerda cada uno. Puedes venir aunque estés empezando a explorar la perfumería.",
    dateTime: "2026-11-22T11:30:00+01:00",
    dateLabel: "22 de noviembre de 2026",
    timeLabel: "11:30",
    endTimeLabel: "13:30",
    venue: "Saisei",
    address: "Av. Diagonal, 593, Les Corts, 08014 Barcelona",
    description: [
      "Vainilla, chocolate, caramelo, almendra o frutas. Exploraremos cómo se traducen esos aromas en perfume y compartiremos qué postres y recuerdos nos evocan.",
    ],
    image: {
      src: "/media/descubriendo-perfumes-gourmand-960.webp",
      srcSet:
        "/media/descubriendo-perfumes-gourmand-480.webp 480w, /media/descubriendo-perfumes-gourmand-960.webp 960w",
      alt: "Cartel de Perfumes Gourmand con una copa de helado y los logotipos de Barcelona Perfume Club y Saisei",
      width: 960,
      height: 1101,
    },
    url: "https://luma.com/7qk1bbin",
  },
];
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
