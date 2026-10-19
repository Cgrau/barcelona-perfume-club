import { useEffect, type RefObject } from "react";
export function useMotion(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    // La página sigue siendo usable si el módulo de animación no se descarga.
    async function enhance() {
      try {
        const [{ default: gsap }, { ScrollTrigger }, { default: Lenis }] =
          await Promise.all([
            import("gsap"),
            import("gsap/ScrollTrigger"),
            import("lenis"),
          ]);
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();
        cleanup = () => media.revert();
        media.add("(prefers-reduced-motion: no-preference)", () => {
          const lenis = new Lenis({
            duration: 1.05,
            anchors: true,
            smoothWheel: true,
          });
          lenis.on("scroll", ScrollTrigger.update);
          const tick = (seconds: number) => lenis.raf(seconds * 1000);
          gsap.ticker.add(tick);
          const context = gsap.context(() => {
            gsap.from(".hero-wordmark > *", {
              opacity: 0,
              y: 28,
              duration: 1.6,
              ease: "power2.out",
            });
            gsap.fromTo(
              ".mouillette-path",
              { strokeDasharray: 700, strokeDashoffset: 700 },
              {
                strokeDashoffset: 0,
                stagger: 0.08,
                ease: "none",
                scrollTrigger: {
                  trigger: ".hero",
                  start: "top top",
                  end: "bottom 35%",
                  scrub: 0.7,
                },
              },
            );
            gsap.to(".hero-wordmark", {
              yPercent: 15,
              opacity: 0.1,
              ease: "none",
              scrollTrigger: {
                trigger: ".hero",
                start: "25% top",
                end: "bottom top",
                scrub: true,
              },
            });
            gsap.fromTo(
              ".transition-media",
              { filter: "blur(12px)", scale: 0.91 },
              {
                filter: "blur(0px)",
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: ".transition-section",
                  start: "top 95%",
                  end: "center 55%",
                  scrub: 0.6,
                },
              },
            );
            gsap.fromTo(
              ".manifesto-word",
              { opacity: 0.22 },
              {
                opacity: 1,
                stagger: 0.18,
                ease: "none",
                scrollTrigger: {
                  trigger: ".manifesto",
                  start: "top 65%",
                  end: "bottom 78%",
                  scrub: 0.4,
                },
              },
            );
          }, root);
          return () => {
            context.revert();
            gsap.ticker.remove(tick);
            lenis.destroy();
          };
        });
      } catch {
        // El contenido y los controles no dependen de las animaciones.
      }
    }
    void enhance();
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [root]);
}
