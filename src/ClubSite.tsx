import { useRef, useState } from "react";
import { club, manifesto, pendingLinks, type LinkKey } from "./content";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { Brand } from "./components/Brand";
import { ClubLink } from "./components/ClubLink";
import { ClubSlider } from "./components/ClubSlider";
import { TransitionMedia } from "./components/Media";
import { useMotion } from "./hooks/useMotion";
import "./styles.css";

export default function ClubSite() {
  const root = useRef<HTMLDivElement>(null);
  const [pending, setPending] = useState<LinkKey | null>(null);
  const [legalOpen, setLegalOpen] = useState(false);
  useMotion(root);
  return (
    <div ref={root}>
      <a className="skip-link" href="#el-club">
        Saltar al contenido
      </a>
      <Header onPending={setPending} />
      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-halo" aria-hidden="true" />
          <svg
            className="hero-mouillette"
            viewBox="0 0 500 650"
            fill="none"
            aria-hidden="true"
          >
            <ellipse
              cx="250"
              cy="325"
              rx="225"
              ry="285"
              stroke="currentColor"
              strokeOpacity=".13"
            />
            {[-32, -16, 0, 16, 32].map((angle) => (
              <path
                className="mouillette-path"
                key={angle}
                transform={`rotate(${angle} 250 565)`}
                d="M237 565 222 100 Q250 82 278 100 L263 565 Z"
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
            <circle cx="250" cy="565" r="4" fill="currentColor" />
          </svg>
          <div className="hero-wordmark">
            <p className="eyebrow hero-city">Barcelona</p>
            <h1 id="hero-title">
              <span>Perfume</span>
              <span className="hero-club">
                Club
                <span className="hero-asterisk" aria-hidden="true">
                  ✳
                </span>
              </span>
            </h1>
          </div>
          <div className="hero-bottom">
            <span className="eyebrow hero-location">
              Barcelona Perfume Club
            </span>
            <a className="scroll-prompt eyebrow" href="#el-club">
              Desliza
              <span className="scroll-line" aria-hidden="true" />
            </a>
            <span className="eyebrow hero-coordinate" aria-hidden="true">
              01 / 03
            </span>
          </div>
        </section>
        <TransitionMedia />
        <section
          id="el-club"
          className="manifesto section-shell"
          aria-label="El club"
        >
          <span className="manifesto-ornament" aria-hidden="true">
            ✳
          </span>
          <p className="manifesto-text">
            <span className="sr-only">{manifesto}</span>
            <span aria-hidden="true">
              {manifesto.split(" ").map((word, index) => (
                <span key={index} className="manifesto-word">
                  {word}{" "}
                </span>
              ))}
            </span>
          </p>
          <span className="manifesto-line" aria-hidden="true" />
        </section>
        <ClubSlider onPending={setPending} />
      </main>
      <footer className="site-footer" id="contacto">
        <div className="footer-frame">
          {["tl", "tr", "bl", "br"].map((corner) => (
            <span
              key={corner}
              className={`deco-corner deco-${corner}`}
              aria-hidden="true"
            />
          ))}
          <span className="footer-star" aria-hidden="true">
            ✳
          </span>
          <p className="footer-phrase">
            El perfume se disfruta
            <br />
            más <em>en compañía.</em>
          </p>
          <ClubLink
            kind="calendar"
            className="outline-link eyebrow"
            onPending={setPending}
          >
            Únete al calendario<span aria-hidden="true">↗</span>
          </ClubLink>
          <Brand className="footer-brand" />
          <nav className="footer-links eyebrow" aria-label="Enlaces del club">
            <ClubLink kind="instagram" onPending={setPending}>
              Instagram
            </ClubLink>
            <ClubLink kind="contact" onPending={setPending}>
              Contacto
            </ClubLink>
            <button onClick={() => setLegalOpen(true)}>Aviso legal</button>
          </nav>
        </div>
        <details className="pending-details">
          <summary>Datos pendientes para publicar</summary>
          <ul>
            {(Object.keys(pendingLinks) as LinkKey[])
              .filter((key) => !club.links[key])
              .map((key) => (
                <li key={key}>{pendingLinks[key].detail}</li>
              ))}
            {!club.legal && (
              <li>TODO: datos del titular para el aviso legal</li>
            )}
            <li>TODO: dominio y URL definitiva para Open Graph</li>
          </ul>
        </details>
      </footer>
      <Modal
        open={pending !== null}
        title={pending ? pendingLinks[pending].title : "Información"}
        onClose={() => setPending(null)}
      >
        <span className="eyebrow">Barcelona Perfume Club</span>
        <h2>{pending ? pendingLinks[pending].title : ""}</h2>
        <p className="pending-note">
          {pending ? pendingLinks[pending].detail : ""}
        </p>
      </Modal>
      <Modal
        open={legalOpen}
        title="Aviso legal"
        onClose={() => setLegalOpen(false)}
      >
        <span className="eyebrow">Barcelona Perfume Club</span>
        <h2>Aviso legal</h2>
        {club.legal ? (
          <dl className="legal-data">
            <dt>Titular</dt>
            <dd>{club.legal.owner}</dd>
            <dt>NIF</dt>
            <dd>{club.legal.taxId}</dd>
            <dt>Domicilio</dt>
            <dd>{club.legal.address}</dd>
            <dt>Contacto</dt>
            <dd>{club.legal.email}</dd>
          </dl>
        ) : (
          <p className="pending-note">
            TODO: identificación del titular, NIF, domicilio y email de
            contacto. Completar antes de publicar.
          </p>
        )}
      </Modal>
    </div>
  );
}
