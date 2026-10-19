import { useEffect, useRef, useState, type CSSProperties } from "react";
import { experiences } from "../content";
import { ClubLink, type PendingHandler } from "./ClubLink";
import { Brand } from "./Brand";
import { PhotoImage } from "./Media";
import { useReducedMotion } from "../hooks/useReducedMotion";
export function ClubSlider({ onPending }: { onPending: PendingHandler }) {
  const [index, setIndex] = useState(0);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const reduced = useReducedMotion();
  const item = experiences[index];
  useEffect(() => () => clearTimeout(timeout.current), []);
  function navigate(step: number) {
    if (outgoing !== null) return;
    setDirection(step);
    if (!reduced) {
      setOutgoing(index);
      timeout.current = setTimeout(() => setOutgoing(null), 850);
    }
    setIndex((index + step + experiences.length) % experiences.length);
  }
  function cardContent(cardIndex: number) {
    const experience = experiences[cardIndex];
    return (
      <>
        <div className="card-front">
          <PhotoImage
            photo={experience.photo}
            sizes="(max-width: 700px) 80vw, 460px"
          />
          <div className="card-photo-shade" />
          <Brand className="card-brand top" />
          <span className="card-roman">{["I", "II", "III"][cardIndex]}</span>
          <span className="card-star top-right">✳</span>
          <span className="card-star bottom-left">✳</span>
          <Brand className="card-brand bottom" />
        </div>
        <div className="card-back">
          <div className="card-back-frame">
            <span className="card-back-star">✳</span>
            <Brand />
          </div>
        </div>
      </>
    );
  }
  return (
    <section
      id="encuentros"
      className="experiences section-shell"
      aria-label="Formas de vivir el club"
      aria-roledescription="carrusel"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          navigate(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      <div className="section-heading">
        <span className="eyebrow">El club</span>
        <h2>
          Formas de vivir
          <br />
          <em>el club.</em>
        </h2>
        <span className="section-heading-star" aria-hidden="true">
          ✳
        </span>
      </div>
      <div className="experience-layout">
        <div
          className="card-deck"
          style={{ "--direction": direction } as CSSProperties}
          onTouchStart={(event) => {
            touch.current = {
              x: event.touches[0].clientX,
              y: event.touches[0].clientY,
            };
          }}
          onTouchEnd={(event) => {
            if (!touch.current) return;
            const dx = event.changedTouches[0].clientX - touch.current.x;
            const dy = event.changedTouches[0].clientY - touch.current.y;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3)
              navigate(dx < 0 ? 1 : -1);
            touch.current = null;
          }}
        >
          <div className="stack-card stack-two" aria-hidden="true" />
          <div className="stack-card stack-one" aria-hidden="true" />
          <div
            key={index}
            className={`perfume-card ${outgoing !== null ? "card-arriving" : ""}`}
            role="group"
            aria-roledescription="tarjeta"
            aria-label={`Tarjeta ${index + 1} de 3`}
          >
            {cardContent(index)}
          </div>
          {outgoing !== null && (
            <div className="perfume-card card-leaving" aria-hidden="true">
              {cardContent(outgoing)}
            </div>
          )}
        </div>
        <div className="experience-info">
          <div className="slider-controls">
            <span className="eyebrow slide-counter">
              <span className="sr-only">Tarjeta {index + 1} de 3</span>
              <span aria-hidden="true">{index + 1} / 3</span>
            </span>
            <div className="slider-arrows">
              <button
                className="arrow-button"
                aria-label="Tarjeta anterior"
                onClick={() => navigate(-1)}
                aria-disabled={outgoing !== null}
              >
                ←
              </button>
              <button
                className="arrow-button"
                aria-label="Tarjeta siguiente"
                onClick={() => navigate(1)}
                aria-disabled={outgoing !== null}
              >
                →
              </button>
            </div>
          </div>
          <div
            className="experience-copy"
            aria-live="polite"
            aria-atomic="true"
          >
            <h3>{item.title}</h3>
            {item.description ? (
              <p>{item.description}</p>
            ) : (
              <p className="eyebrow coming-soon">MUY PRONTO</p>
            )}
          </div>
          {item.description && (
            <ClubLink
              kind="calendar"
              className="text-link eyebrow"
              onPending={onPending}
            >
              Ver calendario<span aria-hidden="true">↗</span>
            </ClubLink>
          )}
          <div className="slide-progress" aria-hidden="true">
            {experiences.map((_, n) => (
              <span className={n === index ? "active" : ""} key={n} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
