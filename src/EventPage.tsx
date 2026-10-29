import { club, type ClubEvent } from "./content";
import { EventDescription, RegistrationNotice } from "./components/EventContent";

export default function EventPage({ event }: { event: ClubEvent }) {
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
          width="960"
          height="1200"
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
          <RegistrationNotice heading="h2" />
          <a
            className="landing-luma"
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="luma-event-detail"
          >
            <span>Solicitar plaza en Luma</span>
          </a>
          <p className="event-availability">
            Consulta la disponibilidad y, cuando corresponda, la lista de espera
            en Luma. Estar en lista de espera no confirma tu plaza.
          </p>
        </div>
      </div>
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
