import { useRef, useState } from "react";
import { club, photos, type Photo } from "../content";
import { useReducedMotion } from "../hooks/useReducedMotion";
export function PhotoImage({
  photo,
  sizes,
  className = "",
}: {
  photo: Photo;
  sizes: string;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={photo.src}
      srcSet={photo.srcSet}
      sizes={sizes}
      alt={photo.alt}
      width="960"
      height="1707"
      loading="lazy"
      decoding="async"
    />
  );
}
export function TransitionMedia() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  return (
    <section
      className="transition-section"
      aria-label="Un encuentro con el perfume"
    >
      <div className="transition-border" />
      <div className="transition-media">
        {club.video && !reduced ? (
          <video
            ref={ref}
            autoPlay
            muted={muted}
            playsInline
            loop
            preload="metadata"
            poster={club.video.poster}
            aria-label="Perfumes y mouillettes del club"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            {club.video.webm && (
              <source src={club.video.webm} type="video/webm" />
            )}
            <source src={club.video.mp4} type="video/mp4" />
          </video>
        ) : club.video ? (
          <img
            src={club.video.poster}
            alt="Perfumes y mouillettes del club"
            width="1600"
            height="900"
            loading="lazy"
          />
        ) : (
          <PhotoImage
            photo={photos.mouillettes}
            sizes="(max-width: 700px) 100vw, 90vw"
          />
        )}
        <div className="photo-shade" />
        <span className="media-corner corner-tl" aria-hidden="true" />
        <span className="media-corner corner-br" aria-hidden="true" />
        {club.video && !reduced && (
          <div className="video-controls">
            <button
              className="eyebrow"
              onClick={() => setMuted(!muted)}
              aria-label={muted ? "Activar sonido" : "Silenciar vídeo"}
            >
              {muted ? "Sonido off" : "Sonido on"}
            </button>
            <button
              className="eyebrow"
              onClick={async () => {
                if (!ref.current) return;
                if (ref.current.paused) {
                  try {
                    await ref.current.play();
                    setPlaying(true);
                  } catch {
                    setPlaying(false);
                  }
                } else {
                  ref.current.pause();
                  setPlaying(false);
                }
              }}
              aria-label={playing ? "Pausar vídeo" : "Reproducir vídeo"}
            >
              {playing ? "Pausa" : "Reproducir"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
