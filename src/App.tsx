import { Brand } from "./components/Brand";
import { club, clubPurpose } from "./content";
import "./landing.css";

export default function App() {
  return (
    <div className="landing">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="landing-header">
        <a
          href="#inicio"
          className="landing-brand"
          aria-label="Barcelona Perfume Club, inicio"
        >
          <Brand className="landing-logo" />
        </a>
        <nav aria-label="Principal">
          <a href="#el-club">El club</a>
          <a
            href={club.links.calendar}
            target="_blank"
            rel="noopener noreferrer"
          >
            Eventos
          </a>
          <a href={club.links.contact}>Contacto</a>
        </nav>
      </header>

      <main
        className="landing-main"
        id="contenido"
        tabIndex={0}
        aria-label="Contenido del club"
      >
        <section
          className="landing-hero"
          id="inicio"
          aria-labelledby="landing-title"
        >
          <div className="landing-hero-copy">
            <p className="landing-eyebrow hero-eyebrow">
              <span aria-hidden="true">✳</span>
              <span>Perfume, conversación y comunidad</span>
            </p>
            <h1 id="landing-title">
              <span>El perfume se </span>
              <span>disfruta más </span>
              <em>en compañía.</em>
            </h1>
            <p className="landing-intro">
              Un punto de encuentro en Barcelona para descubrir perfumes,
              compartir lo que nos mueve y aprender juntos.
            </p>
            <a
              className="landing-luma"
              href={club.links.calendar}
              target="_blank"
              rel="noopener noreferrer"
            >
              Eventos en Luma
            </a>
            <div className="landing-status">
              <span className="status-dot" aria-hidden="true" />
              <div>
                <p className="landing-status-title">
                  Estamos preparándolo todo.
                </p>
                <p>El calendario de eventos saldrá muy pronto.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="landing-about"
          id="el-club"
          aria-labelledby="club-heading"
        >
          <div className="landing-about-label">
            <span className="landing-eyebrow">Lo que nos une</span>
            <h2 id="club-heading">El club</h2>
          </div>
          <p>{clubPurpose}</p>
          <div className="club-pillars">
            <article className="club-pillar">
              <span className="landing-eyebrow pillar-index" aria-hidden="true">
                01
              </span>
              <h3>Descubrir</h3>
              <p>
                Explorar fragancias y marcas que despierten nuestra curiosidad.
              </p>
            </article>
            <article className="club-pillar">
              <span className="landing-eyebrow pillar-index" aria-hidden="true">
                02
              </span>
              <h3>Compartir</h3>
              <p>
                Traer un perfume, intercambiar impresiones y aprender juntos.
              </p>
            </article>
            <article className="club-pillar">
              <span className="landing-eyebrow pillar-index" aria-hidden="true">
                03
              </span>
              <h3>Conectar</h3>
              <p>
                Conocer a otras personas que disfrutan del perfume tanto como
                tú.
              </p>
            </article>
          </div>
        </section>
        <section
          className="landing-events"
          id="eventos"
          aria-labelledby="events-heading"
        >
          <div className="events-panel">
            <div className="events-copy">
              <p className="landing-eyebrow events-status">Muy pronto</p>
              <h2 id="events-heading">Próximos eventos</h2>
              <p>
                Estamos preparando los próximos eventos del club. Encontrarás
                las nuevas fechas en nuestro calendario de Luma.
              </p>
            </div>
            <a
              className="landing-luma"
              href={club.links.calendar}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver calendario
            </a>
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
          <a href={club.links.contact}>barcelonaperfumeclub@proton.me</a>
        </section>
      </main>

      <footer className="landing-footer">
        <nav className="landing-social" aria-label="Redes sociales">
          {club.links.instagram && (
            <a
              href={club.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
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
            </a>
          )}
          <a
            href={club.links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
}
