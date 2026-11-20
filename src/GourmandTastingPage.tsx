import { Brand } from "./components/Brand";
import gourmand from "./tastings/gourmand.json";

export default function GourmandTastingPage() {
  return (
    <div className="landing">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="landing-header">
        <a href="/" className="landing-brand" aria-label="Barcelona Perfume Club, inicio">
          <Brand className="landing-logo" />
        </a>
      </header>
      <main className="landing-main" id="contenido" tabIndex={0}>
        <article className="gourmand-tasting">
          <p className="landing-eyebrow">Encuentro 2 · 22 de noviembre de 2026</p>
          <h1>Perfumes de la cata gourmand</h1>
          <p className="gourmand-tasting-intro">
            Busca el número de cada muestra para comparar tus impresiones con las notas de la marca.
          </p>
          <ol className="gourmand-tasting-list" role="list">
            {gourmand.perfumes.map((perfume, index) => (
              <li key={perfume.name}>
                <span className="gourmand-tasting-number" aria-label={`Muestra ${index + 1}`}>{index + 1}</span>
                <div>
                  <h2><a href={perfume.source}>{perfume.name}</a></h2>
                  <p className="gourmand-tasting-brand">{perfume.brand}</p>
                  <p className="gourmand-tasting-notes">{perfume.notes}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </main>
    </div>
  );
}
