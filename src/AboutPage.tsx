import { about, club } from "./content";

export default function AboutPage() {
  return (
    <article className="about-page" aria-labelledby="about-title">
      <header className="about-hero">
        <p className="landing-eyebrow">Sobre {club.name}</p>
        <h1 id="about-title">El perfume nos reúne.</h1>
        <p className="about-lead">
          Hay aficiones que se disfrutan todavía más cuando encuentras con quién
          compartirlas. Queremos que el perfume sea una de ellas.
        </p>
      </header>

      <section className="about-section" aria-labelledby="about-why">
        <div className="about-section-label">
          <p className="landing-eyebrow">Por qué un club</p>
          <h2 id="about-why">Encontrarnos alrededor del perfume.</h2>
        </div>
        <div className="about-copy">
          <p>
            El perfume puede empezar con algo muy personal: una fragancia que nos
            acompaña, un recuerdo o una marca que despierta nuestra curiosidad.
            Compartirlo abre otras formas de disfrutarlo.
          </p>
          <p>
            Queremos llevar esa curiosidad a una mesa: oler una misma fragancia,
            intercambiar impresiones y descubrir los matices que otra persona ha
            percibido. Darle a la conversación un lugar y un momento para suceder.
          </p>
          <p>
            Por eso organizamos Barcelona Perfume Club: un punto de encuentro en
            Barcelona para quienes disfrutan del perfume y tienen ganas de
            aprender y conocer gente con esa misma afición.
          </p>
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-organizers">
        <div className="about-section-label">
          <p className="landing-eyebrow">Quién lo organiza</p>
          <h2 id="about-organizers">Carles y Laura.</h2>
          <figure className="about-portrait">
            <img
              src="/media/carles-grau-640.webp"
              srcSet="/media/carles-grau-320.webp 320w, /media/carles-grau-640.webp 640w"
              sizes="(max-width: 700px) 240px, (max-width: 1000px) 28vw, 300px"
              width="640"
              height="640"
              alt="Carles Grau, de Carles Grau Perfume"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Carles Grau · Carles Grau Perfume</figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <p>
            Somos Carles y Laura, y compartimos las ganas de reunir a quienes
            disfrutan del perfume tanto como nosotros.
          </p>
          <p>
            Carles Grau es perfumista autodidacta y divulgador de perfumería.
            A través de Carles Grau Perfume comparte su curiosidad por las
            fragancias y por lo que hay detrás de ellas: las materias primas,
            los acordes y las sensaciones que puede despertar un perfume.
          </p>
          <p>
            Su objetivo es crear su propia marca de perfumes. El aprendizaje y
            la creación de contenido forman parte de ese camino: desarrollar
            una voz propia, compartir lo que va descubriendo y dar a conocer sus
            creaciones cuando estén listas.
          </p>
          <p>
            Laura es parte esencial de esta historia. Fue quien le animó a
            empezar a compartir su pasión y a construir ese proyecto personal.
            Su confianza, su apoyo y su visión de negocio han sido fundamentales
            para que las ideas empiecen a tomar forma.
          </p>
          <p>
            También ha recorrido su propio camino en la perfumería. Lo que
            empezó con una predilección por los gourmand se ha abierto a otras
            familias, hasta disfrutar de los matices de las fragancias de cuero.
            A base de probar y compartir perfumes, ha ido afinando su gusto y
            desarrollando un criterio propio.
          </p>
          <p>
            Barcelona Perfume Club nace de esa pasión compartida y del apoyo
            mutuo. Queremos llevar la conversación más allá de las redes:
            encontrarnos, oler juntos y conocer a otras personas con las mismas
            ganas de descubrir.
          </p>
          <p className="about-social-label">Carles Grau Perfume en redes</p>
          <nav className="about-person-social" aria-label="Redes de Carles Grau Perfume">
            {about.carles.socials.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} de ${about.carles.project}`}
                data-umami-event="about-carles-social"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="about-purpose" aria-labelledby="about-purpose">
        <div className="about-purpose-heading">
          <p className="landing-eyebrow">Nuestro objetivo</p>
          <h2 id="about-purpose">Una comunidad que aprende junta.</h2>
          <p>
            Puedes estar empezando o llevar años explorando perfumes. La
            curiosidad y las ganas de escuchar son un buen punto de partida.
          </p>
        </div>
        <div className="about-values">
          <article>
            <h3>Descubrir</h3>
            <p>
              Probar fragancias y acercarnos a marcas y formas de entender la
              perfumería que amplíen nuestra mirada.
            </p>
          </article>
          <article>
            <h3>Compartir</h3>
            <p>
              Poner en común lo que olemos, hacer preguntas y aprender de las
              sensaciones y experiencias de cada persona.
            </p>
          </article>
          <article>
            <h3>Conectar</h3>
            <p>
              Ponerle cara a quienes comparten nuestra afición y crear encuentros
              donde disfrutar del perfume con cercanía y respeto.
            </p>
          </article>
        </div>
      </section>

      <section className="about-invitation" aria-labelledby="about-invitation">
        <h2 id="about-invitation">Nos conocemos en el próximo encuentro.</h2>
        <div>
          <a className="landing-luma" href="/#eventos">
            <span>Ver próximos encuentros</span>
          </a>
          <p>
            Para asistir necesitas registrarte en el evento en Luma y recibir la
            confirmación de tu plaza. Sin registro y confirmación no se podrá
            acceder.
          </p>
        </div>
      </section>
    </article>
  );
}
