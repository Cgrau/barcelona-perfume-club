import { useEffect, useRef, type ReactNode } from "react";

export function Modal({
  open,
  title,
  onClose,
  children,
  menu = false,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  menu?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current!;
    if (!open) {
      if (dialog.open) dialog.close();
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  return (
    <dialog
      ref={ref}
      className={menu ? "modal menu-modal" : "modal info-modal"}
      aria-label={title}
      data-lenis-prevent
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget && !menu) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const items = ref.current!.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex="0"]',
        );
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }}
    >
      <div className="modal-content">
        <button
          className="icon-button modal-close"
          aria-label={menu ? "Cerrar menú" : "Cerrar ventana"}
          onClick={onClose}
          autoFocus
        >
          <span className="close-icon" aria-hidden="true" />
        </button>
        {children}
      </div>
    </dialog>
  );
}
