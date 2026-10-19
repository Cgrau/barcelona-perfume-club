import { club } from "../content";
export function Brand({ className = "" }: { className?: string }) {
  return (
    <img
      className={`brand-logo ${className}`}
      src={club.logo}
      width="360"
      height="360"
      alt="Barcelona Perfume Club"
    />
  );
}
