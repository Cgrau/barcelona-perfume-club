import { useState } from "react";
import { Modal } from "./Modal";
import { Brand } from "./Brand";
import { ClubLink, type PendingHandler } from "./ClubLink";
export function Header({ onPending }: { onPending: PendingHandler }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span aria-hidden="true">
            <i />
            <i />
          </span>
          <span className="eyebrow menu-label">Menú</span>
        </button>
        <a
          href="#inicio"
          className="header-brand"
          aria-label="Barcelona Perfume Club, inicio"
        >
          <Brand />
        </a>
        <ClubLink
          kind="calendar"
          className="header-calendar eyebrow"
          onPending={onPending}
        >
          Calendario<span aria-hidden="true"> ↗</span>
        </ClubLink>
      </header>
      <Modal
        open={open}
        title="Menú principal"
        onClose={() => setOpen(false)}
        menu
      >
        <Brand className="menu-brand" />
        <nav className="menu-navigation" aria-label="Principal">
          <a href="#el-club" onClick={() => setOpen(false)}>
            <span className="eyebrow" aria-hidden="true">
              01
            </span>
            El club
          </a>
          <a href="#encuentros" onClick={() => setOpen(false)}>
            <span className="eyebrow" aria-hidden="true">
              02
            </span>
            Encuentros
          </a>
          <ClubLink kind="instagram" onPending={onPending}>
            <span className="eyebrow" aria-hidden="true">
              03
            </span>
            Instagram
          </ClubLink>
          <ClubLink kind="contact" onPending={onPending}>
            <span className="eyebrow" aria-hidden="true">
              04
            </span>
            Contacto
          </ClubLink>
        </nav>
        <p className="eyebrow menu-signoff">Barcelona Perfume Club</p>
      </Modal>
    </>
  );
}
