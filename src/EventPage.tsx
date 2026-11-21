import { club, gourmandEventPath, type ClubEvent } from "./content";
import gourmand from "./tastings/gourmand.json";
import { EventDescription, RegistrationNotice } from "./components/EventContent";

export default function EventPage({ event }: { event: ClubEvent }) {
  const isPast = event.status === "past";
  return (
    <article className="event-page" aria-labelledby="event-title">
      <nav className="event-breadcrumbs" aria-label="Migas de pan">
        <a href="/">Inicio</a>
        <span aria-hidden="true">/</span>
        <a href="/#eventos">Eventos</a>
      </nav>
      <header className="event-page-header">
        <p className="landing-eyebrow">{event.edition} de {club.name}</p>
        <h1 id="event-title">{event.title}</h1>
        <p>{event.introduction}</p>
      </header>
      <div className="event-card">
        <img
          className="event-page-poster"
          src={event.image.src}
          srcSet={event.image.srcSet}
          sizes="(max-width: 700px) calc(100vw - 84px), (max-width: 1000px) 40vw, 420px"
          alt={event.image.alt}
          width={event.image.width}
          height={event.image.height}
          fetchPriority="high"
          decoding="async"
        />
        <div className="event-copy">
          <div className="event-details">
            <time dateTime={event.dateTime}>
              {event.dateLabel} · {event.timeLabel}–{event.endTimeLabel} h
            </time>
            <p>{event.venue}</p>
            <p>{event.address}</p>
          </div>
          <EventDescription event={event} />
          <p className="event-description">{event.detail}</p>
          {event.path === gourmandEventPath && (
            <p>
              <a className="event-tasting-link" href={gourmand.path}>
                Consulta los perfumes y sus notas olfativas
              </a>
            </p>
          )}
          {!isPast && <RegistrationNotice heading="h2" />}
          <a
            className="landing-luma"
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="luma-event-detail"
          >
            <span>{isPast ? "Ver ficha en Luma" : "Solicitar plaza en Luma"}</span>
          </a>
          {!isPast && <p className="event-availability">
            Consulta la disponibilidad y, cuando corresponda, la lista de espera
            en Luma. Estar en lista de espera no confirma tu plaza.
          </p>}
        </div>
      </div>
      {event.gallery && (
        <section className="event-gallery" aria-labelledby="event-gallery-heading">
          <h2 id="event-gallery-heading">Fotos del encuentro</h2>
          <ul className="event-gallery-grid">
            {event.gallery.map((image, index) => (
              <li key={image.src}>
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={index === 0
                    ? "(max-width: 700px) calc(100vw - 42px), (max-width: 1000px) 55vw, 710px"
                    : "(max-width: 700px) calc(50vw - 30px), 270px"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </section>
      )}
      <div className="event-page-about">
        <h2>Organiza {club.name}</h2>
        <p>
          Somos un club de perfumería en Barcelona para descubrir marcas,
          compartir fragancias y conocer a personas con la misma curiosidad.
          Lo que nos reúne es disfrutar del perfume en compañía.
        </p>
        <a href="/#el-club">Conoce el club</a>
      </div>
    </article>
  );
}
