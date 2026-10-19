import type { ReactNode } from "react";
import { club, type LinkKey } from "../content";
export type PendingHandler = (key: LinkKey) => void;
export function ClubLink({
  kind,
  children,
  className = "",
  onPending,
}: {
  kind: LinkKey;
  children: ReactNode;
  className?: string;
  onPending: PendingHandler;
}) {
  const url = club.links[kind];
  return url ? (
    <a
      className={className}
      href={url}
      target={kind === "contact" ? undefined : "_blank"}
      rel={kind === "contact" ? undefined : "noopener noreferrer"}
    >
      {children}
    </a>
  ) : (
    <button type="button" className={className} onClick={() => onPending(kind)}>
      {children}
    </button>
  );
}
