import type { ClubEvent } from "../content";

export function EventDescription({ event }: { event: ClubEvent }) {
  return (
    <p className="event-description">
      {event.description.map((part) =>
        typeof part === "string" ? part : (
          <a
            key={part.url}
            href={part.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${part.text} en Instagram`}
            data-umami-event="event-brand-instagram"
          >
            {part.text}
          </a>
        ),
      )}
    </p>
  );
}

export function RegistrationNotice({ heading = "h4" }: { heading?: "h2" | "h4" }) {
  const Heading = heading;
  return (
    <aside className="event-registration" aria-label="Requisitos de acceso">
      <Heading>Registro obligatorio en Luma</Heading>
      <p>
        Plazas limitadas. Para asistir es imprescindible registrarse en este
        evento en Luma y recibir la confirmación de la plaza.
      </p>
      <p className="event-registration-restriction">
        Sin registro y confirmación no se podrá acceder.
      </p>
    </aside>
  );
}
