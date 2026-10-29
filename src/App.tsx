import { Brand } from "./components/Brand";
import { club, clubPurpose, events } from "./content";
import { EventDescription, RegistrationNotice } from "./components/EventContent";
import EventPage from "./EventPage";
import { normalizePathname } from "./seo";

export default function App({ pathname = "/" }: { pathname?: string }) {
  const eventDetail = events.find((event) => event.path === normalizePathname(pathname));
  const home = eventDetail ? "/" : "";
  return (
    <div className="landing">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="landing-header">
        <a
          href={`${home}#inicio`}
          className="landing-brand"
          aria-label="Barcelona Perfume Club, inicio"
        >
          <Brand className="landing-logo" />
        </a>
        <nav aria-label="Principal">
          <a href={`${home}#el-club`}>El club</a>
          <a href={`${home}#eventos`}>Eventos</a>
          <a href={club.links.contact} data-umami-event="contact-menu">
            Contacto
          </a>
        </nav>
      </header>

      <main
        className="landing-main"
        id="contenido"
        tabIndex={0}
        aria-label="Contenido del club"
      >
        {eventDetail ? <EventPage event={eventDetail} /> : <>
        <section
          className="landing-hero"
          id="inicio"
          aria-labelledby="landing-title"
        >
          <div className="landing-hero-copy">
            <p className="landing-eyebrow hero-eyebrow">
              <span>Perfume, conversación y comunidad</span>
              <span className="hero-location">Barcelona</span>
            </p>
            <h1 id="landing-title">
              El perfume se disfruta más <em>en compañía.</em>
            </h1>
            <div className="hero-invitation">
              <div className="hero-message">
                <p className="landing-intro">
                  {club.name} es un club de perfumería en Barcelona.
                  Descubre marcas, comparte tu afición
                  y conoce gente con tu misma pasión.
                </p>
                <div className="hero-action">
                  <a
                    className="landing-luma"
                    href={events[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event="luma-hero"
                  >
                    <span>Apúntate al primer evento</span>
                  </a>
                  <div className="landing-status">
                    <p className="landing-status-title">
                      Nuestro primer evento ya tiene fecha.
                    </p>
                    <p>
                      {events[0].dateLabel} · {events[0].timeLabel} h · Barcelona
                    </p>
                    <p className="landing-access-summary">
                      Plazas limitadas. Acceso solo con registro y plaza confirmada
                      en Luma. Sin registro y confirmación no se podrá acceder.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="landing-events"
          id="eventos"
          aria-labelledby="events-heading"
        >
          <div className="events-copy">
            <h2 id="events-heading">Próximos eventos</h2>
            <p>
              Empezamos a encontrarnos. Descubre nuestros encuentros y apúntate
              en Luma para disfrutar del perfume en compañía.
            </p>
          </div>
          <ul className="events-list">
            {events.map((event) => (
              <li key={event.id}>
                <article className="event-card" aria-labelledby={`event-${event.id}`}>
                  <a
                    className="event-poster"
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${event.title} en Luma`}
                    data-umami-event="luma-event-poster"
                  >
                    <img
                      src={event.image.src}
                      srcSet={event.image.srcSet}
                      sizes="(max-width: 700px) calc(100vw - 84px), (max-width: 1000px) 40vw, 420px"
                      alt={event.image.alt}
                      width="960"
                      height="1200"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <div className="event-copy">
                    <p className="landing-eyebrow">Barcelona Perfume Club</p>
                    <h3 id={`event-${event.id}`}>
                      <a href={event.path} data-umami-event="event-page">{event.title}</a>
                    </h3>
                    <div className="event-details">
                      <time dateTime={event.dateTime}>
                        {event.dateLabel} · {event.timeLabel} h
                      </time>
                      <p>{event.venue}</p>
                      <p>{event.address}</p>
                    </div>
                    <EventDescription event={event} />
                    <RegistrationNotice />
                    <a
                      className="landing-luma"
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-umami-event="luma-event"
                    >
                      <span>Ver evento en Luma</span>
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <a
            className="events-calendar"
            href={club.links.calendar}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="luma-calendar"
          >
            Ver calendario
          </a>
        </section>

        <section
          className="landing-about"
          id="el-club"
          aria-labelledby="club-heading"
        >
          <div className="landing-about-label">
            <h2 id="club-heading">El club</h2>
            <p>
              Un club de perfumería en Barcelona para oler, aprender y compartir.
            </p>
          </div>
          <div className="landing-about-copy">
            <p className="club-statement">
              Trae tu curiosidad.
              <br />
              El resto, lo compartimos.
            </p>
            <p>{clubPurpose}</p>
            <p className="club-welcome">
              No hace falta ser experto. Solo tener ganas de oler, conversar y
              conocer gente con tu misma pasión.
            </p>
          </div>
          <div className="club-pillars">
            <article className="club-pillar">
              <h3>Descubrir</h3>
              <p>
                Explorar fragancias y marcas que despierten nuestra curiosidad.
              </p>
            </article>
            <article className="club-pillar">
              <h3>Compartir</h3>
              <p>
                Traer un perfume, intercambiar impresiones y aprender juntos.
              </p>
            </article>
            <article className="club-pillar">
              <h3>Conectar</h3>
              <p>
                Conocer a otras personas que disfrutan del perfume tanto como
                tú.
              </p>
            </article>
          </div>
          <div className="club-faq">
            <h3>Antes de conocernos</h3>
            <div className="club-faq-list">
              <details>
                <summary>¿Qué es Barcelona Perfume Club?</summary>
                <p>
                  Una comunidad de Barcelona para personas que disfrutan del
                  perfume y quieren compartir esa afición. Queremos reunirnos
                  para descubrir fragancias y marcas, intercambiar impresiones
                  y conocer gente con la misma curiosidad.
                </p>
              </details>
              <details>
                <summary>¿Hace falta saber de perfumería para participar?</summary>
                <p>
                  No. Puedes estar empezando o llevar años explorando perfumes.
                  Lo que nos une es la curiosidad y las ganas de escuchar,
                  aprender y compartir, sin necesidad de dominar un vocabulario
                  técnico.
                </p>
              </details>
              <details>
                <summary>¿Qué actividades organizáis en Barcelona?</summary>
                <p>
                  Catas de perfumes, descubrimientos de marcas y cenas
                  olfativas. En el apartado «Eventos» encontrarás los encuentros
                  anunciados, con su fecha, lugar y enlace para apuntarte en Luma.
                </p>
              </details>
              <details>
                <summary>¿Cómo puedo apuntarme a los eventos?</summary>
                <p>
                  Abre «Eventos» en el menú y elige el encuentro que te interese.
                  El botón «Ver evento en Luma» te lleva a su página para consultar
                  los detalles y solicitar tu plaza. Las plazas son limitadas:
                  es imprescindible registrarse en el evento en Luma y recibir la
                  confirmación de la plaza para asistir. Sin registro y confirmación
                  no se podrá acceder. También puedes seguir nuestro
                  calendario en Luma para enterarte de los próximos encuentros.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section
          className="landing-contact"
          id="contacto"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading">Hablemos de perfume.</h2>
          <p>
            ¿Tienes alguna consulta o una idea para colaborar? Nos encantará
            leerte.
          </p>
          <a href={club.links.contact} data-umami-event="contact-email">
            barcelonaperfumeclub@proton.me
          </a>
        </section>
        </>}
      </main>

      <footer className="landing-footer">
        <nav className="landing-social" aria-label="Redes sociales">
          {club.links.instagram && (
            <a
              href={club.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              data-umami-event="instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle
                  cx="17.4"
                  cy="6.6"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              <span>Instagram</span>
            </a>
          )}
          <a
            href={club.links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            data-umami-event="tiktok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
            <span>TikTok</span>
          </a>
        </nav>
      </footer>
    </div>
  );
}
