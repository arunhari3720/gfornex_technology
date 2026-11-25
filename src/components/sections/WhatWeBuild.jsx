
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { builds } from "../../data";
import { SectionHeading } from "../Shared";

// 1. Horizontal Gallery
function HorizontalGallery() {
  const ref = useRef(null);
  const track = useRef(null);
  const [dx, setDx] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (track.current) {
        setDx(
          Math.max(
            0,
            track.current.scrollWidth - window.innerWidth
          )
        );
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(p, [0, 1], [0, -dx]);

  const fills = [
    "from-brand-200 to-brand-500",
    "from-brand-400 to-brand-800",
    "from-brand-100 to-brand-600",
    "from-brand-300 to-brand-700",
    "from-brand-500 to-brand-900",
  ];

  return (
    <section ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">

        <div className="container-width">
          <SectionHeading
            eyebrow="What we build"
            title="Digital experiences made for real-world work."
          />
        </div>

        <motion.div
          ref={track}
          style={{ x }}
          className="flex w-max gap-6 px-[max(24px,calc((100vw-1160px)/2))]"
        >
          {builds.map(([t, d], i) => (
            <div
              key={t}
              className="w-[78vw] shrink-0 overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-lg shadow-brand-100 sm:w-[380px]"
            >
              <div
                className={`relative grid h-48 place-items-center bg-gradient-to-br ${fills[i % fills.length]}`}
              >
                <div className="grid-pattern absolute inset-0 opacity-60" />

                <span className="relative font-heading text-6xl font-extrabold text-white/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-brand-950">
                  {t}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {d}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// 2. Zoom Parallax
function ZoomParallax() {
  const ref = useRef(null);

  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scales = [
    useTransform(p, [0, 1], [1, 4]),
    useTransform(p, [0, 1], [1, 5]),
    useTransform(p, [0, 1], [1, 6]),
    useTransform(p, [0, 1], [1, 5]),
    useTransform(p, [0, 1], [1, 6]),
    useTransform(p, [0, 1], [1, 8]),
    useTransform(p, [0, 1], [1, 9]),
  ];

  const tiles = [
    ["h-[25vh] w-[25vw]", "Madurai"],
    ["-top-[30vh] left-[5vw] h-[30vh] w-[35vw]", "Web & apps"],
    ["-top-[10vh] -left-[25vw] h-[45vh] w-[20vw]", "Cloud"],
    ["left-[27.5vw] h-[25vh] w-[25vw]", "AI"],
    ["top-[27.5vh] left-[5vw] h-[25vh] w-[20vw]", "Security"],
    ["top-[27.5vh] -left-[22.5vw] h-[25vh] w-[30vw]", "UI & UX"],
    ["top-[22.5vh] left-[25vw] h-[15vh] w-[15vw]", "Support"],
  ];

  const fills = [
    "from-brand-700 to-brand-900",
    "from-brand-300 to-brand-500",
    "from-brand-500 to-brand-700",
    "from-brand-200 to-brand-400",
    "from-brand-600 to-brand-800",
    "from-brand-400 to-brand-600",
    "from-brand-300 to-brand-600",
  ];

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {tiles.map(([cls, label], i) => (
          <motion.div
            key={label}
            style={{ scale: scales[i] }}
            className="absolute top-0 flex h-full w-full items-center justify-center"
          >
            <div
              className={`relative grid place-items-center rounded-xl bg-gradient-to-br ${fills[i]} ${cls}`}
            >
              {i === 0 ? (
                <div className="text-center text-white">
                  <p className="font-heading text-xs font-bold sm:text-lg">
                    Madurai
                  </p>
                  <p className="text-[8px] sm:text-xs">
                    Tamil Nadu
                  </p>
                </div>
              ) : (
                <span className="px-1 text-center font-heading text-[9px] font-bold text-white/90 sm:text-sm">
                  {label}
                </span>
              )}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

// 3. Main What We Build Section
export default function WhatWeBuild() {
  return (
    <>
      <HorizontalGallery />
      <ZoomParallax />
    </>
  );
}
