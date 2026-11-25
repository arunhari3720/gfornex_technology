
// // // import { useRef } from "react";
// import { Link } from "react-router-dom";
// // // import {
// // //   motion,
// // //   useMotionTemplate,
// // //   useScroll,
// // //   useTransform,
// // // } from "motion/react";
// // // import DigitalGlobe from "./DigitakGlobe";

// // // export default function MorphHero() {
// // //   const ref = useRef(null);

// // //   const { scrollYProgress: p } = useScroll({
// // //     target: ref,
// // //     offset: ["start start", "end end"],
// // //   });

// // //   // Original morph reveal animation
// // //   const top = useTransform(p, [0, 0.7], [56, 0]);
// // //   const side = useTransform(p, [0, 0.7], [26, 0]);
// // //   const bottom = useTransform(p, [0, 0.7], [6, 0]);
// // //   const radius = useTransform(p, [0, 0.7], [48, 0]);

// // //   const clip = useMotionTemplate`inset(${top}% ${side}% ${bottom}% ${side}% round ${radius}px)`;

// // //   // Text animation
// // //   const textY = useTransform(p, [0, 0.35], [0, -80]);
// // //   const textO = useTransform(p, [0, 0.3], [1, 0]);

// // //   // Globe reveal animation
// // //   const globeO = useTransform(p, [0.15, 0.55], [0.3, 1]);

// // //   return (
// // //     <section id="home" ref={ref} className="relative h-[240vh]">
// // //       <div className="sticky top-0 h-screen overflow-hidden bg-[#F8FAFC]">

// // //         {/* SUBTLE BACKGROUND */}
// // //         <div className="pointer-events-none absolute inset-0">
// // //           <div className="absolute -top-40 left-1/3 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-[120px]" />

// // //           <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0F172A_1px,transparent_1px),linear-gradient(90deg,#0F172A_1px,transparent_1px)] [background-size:48px_48px]" />
// // //         </div>

// // //         {/* LEFT CONTENT */}
// // //         <motion.div
// // //           style={{ y: textY, opacity: textO }}
// // //           className="
// // //             container-width absolute left-0 top-1/2 z-10
// // //             w-[48%] -translate-y-1/2 px-6
// // //             max-lg:w-[47%]
// // //             max-md:top-[7%] max-md:w-full
// // //             max-md:translate-y-0 max-md:px-6
// // //           "
// // //         >
// // //           <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">

// // //             <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-700 sm:text-xs">
// // //               FORNEX IT SOLUTIONS
// // //             </p>

// // //             <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[68px]">
// // //               Connecting
// // //               <br />
// // //               Technology.
// // //               <br />
// // //               <span className="gradient-text">
// // //                 Creating Growth.
// // //               </span>
// // //             </h1>

// // //             <p className="mt-6 max-w-lg text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
// // //               We build digital products, strengthen your Google Business
// // //               Profile, and improve search visibility through strategic SEO.
// // //               Everything your business needs to grow online.
// // //             </p>

// // //             <div className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
// // //               <a
// // //                 href="#contact"
// // //                 className="group inline-flex items-center gap-3 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-900"
// // //               >
// // //                 Start a Project

// // //                 <span className="transition-transform group-hover:translate-x-1">
// // //                   →
// // //                 </span>
// // //               </a>

// // //               <a
// // //                 href="#services"
// // //                 className="text-sm font-semibold text-slate-600 transition hover:text-brand-700"
// // //               >
// // //                 Explore Services ↗
// // //               </a>
// // //             </div>

// // //             <div className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400 lg:justify-start sm:text-xs">
// // //               <span>Digital Products</span>
// // //               <span>Google Business Profile</span>
// // //               <span>SEO</span>
// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //         {/* RIGHT SIDE - PERMANENT CARD */}
// // //         <div
// // //           className="
// // //             absolute right-[5%] top-1/2 z-20
// // //             h-[min(76vh,680px)]
// // //             w-[min(44vw,620px)]
// // //             -translate-y-1/2
// // //             overflow-hidden rounded-[40px]
// // //             border border-blue-300/20
// // //             bg-gradient-to-br from-[#071A35] via-[#103665] to-[#071426]
// // //             shadow-[0_30px_100px_rgba(15,45,90,0.25)]
// // //             max-lg:right-[3%] max-lg:w-[46vw]
// // //             max-md:right-[5%] max-md:top-auto
// // //             max-md:bottom-[4%] max-md:h-[38vh]
// // //             max-md:w-[90%] max-md:translate-y-0
// // //           "
// // //         >
// // //           {/* FIXED CARD BACKGROUND */}
// // //           <div
// // //             className="
// // //               pointer-events-none absolute inset-0 opacity-[0.09]
// // //               [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)]
// // //               [background-size:48px_48px]
// // //             "
// // //           />

// // //           {/* Ambient lighting */}
// // //           <div className="pointer-events-none absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[90px]" />

// // //           {/* FIXED TOP LABEL */}
// // //           <div className="absolute right-5 top-5 z-30 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-semibold text-blue-100 backdrop-blur-xl">
// // //             <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
// // //             Digital Network
// // //           </div>

// // //           {/* ONLY THE GLOBE REVEALS */}
// // //           <motion.div
// // //             style={{ clipPath: clip, opacity: globeO }}
// // //             className="absolute inset-0 z-10 flex items-center justify-center"
// // //           >
// // //             <div className="w-full max-w-[570px]">
// // //               <DigitalGlobe />
// // //             </div>
// // //           </motion.div>

// // //           {/* FIXED BOTTOM LABEL */}
// // //           <div className="absolute bottom-5 left-0 right-0 z-30 flex items-center justify-between px-6">
// // //             <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-200/60">
// // //               Connected Digital Ecosystem
// // //             </p>

// // //             <p className="text-[9px] font-bold tracking-[0.2em] text-blue-200/40">
// // //               FORNEX / 01
// // //             </p>
// // //           </div>

// // //           {/* Corner indicator */}
// // //           <div className="absolute bottom-12 right-6 z-30 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_#67e8f9]" />
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }
// // import { useEffect, useRef, useState } from "react";
// // import {
// //   motion,
// //   useMotionTemplate,
// //   useScroll,
// //   useSpring,
// //   useTransform,
// // } from "motion/react";
// // import DigitalGlobe from "./DigitakGlobe"; // filename spelling check pannunga

// // const EASE = [0.22, 1, 0.36, 1];
// // const PITCH = 40; // row height 34 + gap 6
// // const ROW_H = 34;

// // const clamp01 = (n) => Math.min(1, Math.max(0, n));
// // const smooth = (t) => t * t * (3 - 2 * t);
// // const lerp = (a, b, t) => a + (b - a) * t;

// // const rise = (i) => ({
// //   initial: { opacity: 0, y: 28 },
// //   animate: { opacity: 1, y: 0 },
// //   transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: EASE },
// // });

// // function calc() {
// //   if (typeof window === "undefined") {
// //     return { w: 1440, h: 900, cardW: 620, cardH: 680, left: 700, top: 110, g0: 560, gEnd: 1000 };
// //   }
// //   const w = window.innerWidth;
// //   const h = window.innerHeight;
// //   const mobile = w < 768;
// //   const tablet = w < 1024;

// //   const cardW = mobile ? w * 0.9 : Math.min(w * (tablet ? 0.46 : 0.44), 620);
// //   const cardH = mobile ? h * 0.38 : Math.min(h * 0.76, 680);
// //   const right = mobile ? w * 0.05 : tablet ? w * 0.03 : w * 0.05;
// //   const left = w - right - cardW;
// //   const top = mobile ? h - h * 0.04 - cardH : (h - cardH) / 2;

// //   const g0 = Math.min(cardW, cardH) * 0.9;
// //   const gEndRaw = mobile ? w * 1.1 : Math.min(w * 0.9, h * 1.2);
// //   const gEnd = Math.max(gEndRaw, g0 * 1.5);

// //   return { w, h, cardW, cardH, left, top, g0, gEnd };
// // }

// // /* ---------- Headline word reveal ---------- */
// // function Word({ p, i, accent, children }) {
// //   const s = 0.6 + i * 0.055;
// //   const o = useTransform(p, [s, s + 0.09], [0, 1]);
// //   const y = useTransform(p, [s, s + 0.09], [36, 0]);
// //   const b = useTransform(p, [s, s + 0.09], [12, 0]);
// //   const filter = useMotionTemplate`blur(${b}px)`;

// //   return (
// //     <motion.span
// //       style={{ opacity: o, y, filter }}
// //       className={`mr-[0.25em] inline-block ${
// //         accent
// //           ? "bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"
// //           : ""
// //       }`}
// //     >
// //       {children}
// //     </motion.span>
// //   );
// // }

// // /* ---------- Ranking rows ---------- */
// // function YoursRow({ pos }) {
// //   const y = useTransform(pos, (s) => s * PITCH);
// //   return (
// //     <motion.div
// //       style={{ y, height: ROW_H }}
// //       className="absolute left-0 right-0 top-0 z-10 flex items-center gap-2 rounded-xl bg-orange-500 px-3 text-[13px] font-bold text-white shadow-lg shadow-orange-500/30"
// //     >
// //       <span className="text-[10px]">▲</span> yourbusiness.com
// //     </motion.div>
// //   );
// // }

// // function RivalRow({ pos, i, name }) {
// //   // when "yours" passes this rival it gets pushed one slot down
// //   const y = useTransform(pos, (s) => (i + clamp01(i + 1 - s)) * PITCH);
// //   return (
// //     <motion.div
// //       style={{ y, height: ROW_H }}
// //       className="absolute left-0 right-0 top-0 flex items-center rounded-xl bg-sky-100/80 px-3 text-[13px] font-medium text-slate-600"
// //     >
// //       {name}
// //     </motion.div>
// //   );
// // }

// // function SearchCard({ pos, rank }) {
// //   const rivals = ["rival-one.com", "rival-two.com", "rival-three.com", "rival-four.com"];
// //   return (
// //     <div className="w-[250px] rounded-3xl border border-white bg-white/90 p-4 shadow-[0_20px_60px_rgba(30,90,160,0.18)] backdrop-blur-xl">
// //       <p className="mb-3 text-sm font-bold text-slate-900">
// //         Google Search{" "}
// //         <motion.span className="ml-1 text-orange-500">{rank}</motion.span>
// //       </p>
// //       <div className="relative" style={{ height: PITCH * 5 - 6 }}>
// //         {rivals.map((name, i) => (
// //           <RivalRow key={name} pos={pos} i={i} name={name} />
// //         ))}
// //         <YoursRow pos={pos} />
// //       </div>
// //     </div>
// //   );
// // }

// // function MapsCard({ mapRank, starsO }) {
// //   return (
// //     <div className="w-[210px] rounded-3xl border border-white bg-white/90 px-4 py-5 text-center shadow-[0_20px_60px_rgba(30,90,160,0.18)] backdrop-blur-xl">
// //       <p className="text-sm font-bold text-slate-900">Google Maps (GBP)</p>
// //       <motion.p className="my-1 text-6xl font-extrabold tabular-nums text-orange-500">
// //         {mapRank}
// //       </motion.p>
// //       <motion.p style={{ opacity: starsO }} className="text-sm tracking-widest text-orange-400">
// //         ★★★★★
// //       </motion.p>
// //       <p className="mt-2 text-xs font-medium text-slate-500">Map Pack position</p>
// //     </div>
// //   );
// // }

// // /* ---------- Main ---------- */
// // export default function MorphHero() {
// //   const ref = useRef(null);

// //   const [dims, setDims] = useState(calc);
// //   const d = useRef(dims);
// //   d.current = dims;

// //   useEffect(() => {
// //     const onResize = () => setDims(calc());
// //     window.addEventListener("resize", onResize);
// //     return () => window.removeEventListener("resize", onResize);
// //   }, []);

// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["start start", "end end"],
// //   });

// //   const p = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

// //   // expand progress
// //   const e = useTransform(p, (v) => smooth(clamp01((v - 0.08) / 0.54)));

// //   const cardLeft = useTransform(e, (v) => lerp(d.current.left, 0, v));
// //   const cardTop = useTransform(e, (v) => lerp(d.current.top, 0, v));
// //   const cardWidth = useTransform(e, (v) => lerp(d.current.cardW, d.current.w, v));
// //   const cardHeight = useTransform(e, (v) => lerp(d.current.cardH, d.current.h, v));
// //   const cardRadius = useTransform(e, (v) => lerp(40, 0, v));

// //   const globeScale = useTransform(e, (v) => lerp(d.current.g0 / d.current.gEnd, 1, v));
// //   const globeO = useTransform(p, [0.5, 0.85], [1, 0.75]);

// //   const textO = useTransform(p, [0, 0.22], [1, 0]);
// //   const textX = useTransform(p, [0, 0.25], [0, -60]);
// //   const bottomLabelO = useTransform(p, [0.3, 0.5], [1, 0]);

// //   // soft white wash behind headline so text is readable
// //   const washO = useTransform(p, [0.5, 0.8], [0, 1]);

// //   const kickerO = useTransform(p, [0.56, 0.66], [0, 1]);
// //   const kickerY = useTransform(p, [0.56, 0.66], [20, 0]);
// //   const subO = useTransform(p, [0.82, 0.92], [0, 1]);
// //   const subY = useTransform(p, [0.82, 0.92], [24, 0]);
// //   const ctaO = useTransform(p, [0.88, 0.97], [0, 1]);
// //   const ctaY = useTransform(p, [0.88, 0.97], [24, 0]);

// //   // ranking animation (scroll 60% -> 90%)
// //   const t = useTransform(p, [0.6, 0.9], [0, 1]);
// //   const pos = useTransform(t, (v) => 4 - 4 * smooth(v)); // slot 4 (#5) -> slot 0 (#1)
// //   const rank = useTransform(pos, (s) => `#${Math.round(s) + 1}`);
// //   const mapRank = useTransform(t, (v) => `#${Math.round(lerp(8, 2, smooth(v)))}`);
// //   const starsO = useTransform(t, [0.4, 1], [0.25, 1]);

// //   // rank cards appear
// //   const c1O = useTransform(p, [0.48, 0.6], [0, 1]);
// //   const c1Y = useTransform(p, [0.48, 0.6], [30, 0]);
// //   const c2O = useTransform(p, [0.54, 0.66], [0, 1]);
// //   const c2Y = useTransform(p, [0.54, 0.66], [30, 0]);

// //   return (
// //     <section id="home" ref={ref} className="relative h-[300vh]">
// //       <div className="sticky top-0 h-screen overflow-hidden bg-[#F8FAFC]">
// //         {/* SUBTLE BACKGROUND */}
// //         <div className="pointer-events-none absolute inset-0">
// //           <div className="absolute -top-40 left-1/3 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-[120px]" />
// //           <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0F172A_1px,transparent_1px),linear-gradient(90deg,#0F172A_1px,transparent_1px)] [background-size:48px_48px]" />
// //         </div>

// //         {/* LEFT CONTENT */}
// //         <div
// //           className="
// //             container-width absolute left-0 top-1/2 z-10
// //             w-[48%] -translate-y-1/2 px-6
// //             max-lg:w-[47%]
// //             max-md:top-[7%] max-md:w-full
// //             max-md:translate-y-0 max-md:px-6
// //           "
// //         >
// //           <motion.div
// //             style={{ opacity: textO, x: textX }}
// //             className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
// //           >
// //             <motion.p
// //               {...rise(0)}
// //               className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-700 sm:text-xs"
// //             >
// //               FORNEX IT SOLUTIONS
// //             </motion.p>

// //             <motion.h1
// //               {...rise(1)}
// //               className="font-heading text-4xl font-extrabold leading-[1.1] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[68px]"
// //             >
// //               Connecting
// //               <br />
// //               Technology.
// //               <br />
// //               <span className="gradient-text">Creating Growth.</span>
// //             </motion.h1>

// //             <motion.p
// //               {...rise(2)}
// //               className="mt-6 max-w-lg text-sm leading-7 text-slate-500 sm:text-base sm:leading-8"
// //             >
// //               We build digital products, strengthen your Google Business
// //               Profile, and improve search visibility through strategic SEO.
// //               Everything your business needs to grow online.
// //             </motion.p>

// //             <motion.div
// //               {...rise(3)}
// //               className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
// //             >
// //               <a
// //                 href="#contact"
// //                 className="group inline-flex items-center gap-3 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-900"
// //               >
// //                 Start a Project
// //                 <span className="transition-transform group-hover:translate-x-1">→</span>
// //               </a>
// //               <a
// //                 href="#services"
// //                 className="text-sm font-semibold text-slate-600 transition hover:text-brand-700"
// //               >
// //                 Explore Services ↗
// //               </a>
// //             </motion.div>

// //             <motion.div
// //               {...rise(4)}
// //               className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400 lg:justify-start sm:text-xs"
// //             >
// //               <span>Digital Products</span>
// //               <span>Google Business Profile</span>
// //               <span>SEO</span>
// //             </motion.div>
// //           </motion.div>
// //         </div>

// //         {/* GLOBE CARD: right side -> full page (LIGHT theme) */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.96 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 1, delay: 0.2, ease: EASE }}
// //           style={{
// //             left: cardLeft,
// //             top: cardTop,
// //             width: cardWidth,
// //             height: cardHeight,
// //             borderRadius: cardRadius,
// //             background:
// //               "radial-gradient(circle at 50% 55%, rgba(125,196,255,0.55), transparent 60%), radial-gradient(circle at 100% 0%, rgba(255,190,135,0.65), transparent 45%), linear-gradient(135deg, #ffffff, #eaf5ff)",
// //           }}
// //           className="absolute z-20 overflow-hidden border border-sky-200/60 shadow-[0_30px_100px_rgba(40,110,190,0.18)]"
// //         >
// //           {/* soft blue dots */}
// //           <div
// //             className="pointer-events-none absolute inset-0 opacity-60"
// //             style={{
// //               backgroundImage:
// //                 "radial-gradient(rgba(56,140,220,0.22) 1px, transparent 1px)",
// //               backgroundSize: "22px 22px",
// //             }}
// //           />

// //           {/* ambient glow */}
// //           <div className="pointer-events-none absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/30 blur-[90px]" />

// //           {/* GLOBE */}
// //           <motion.div
// //             style={{
// //               x: "-50%",
// //               y: "-50%",
// //               scale: globeScale,
// //               opacity: globeO,
// //               width: dims.gEnd,
// //             }}
// //             className="absolute left-1/2 top-1/2 z-10"
// //           >
// //             <DigitalGlobe />
// //           </motion.div>

// //           {/* white wash behind headline */}
// //           <motion.div
// //             style={{
// //               opacity: washO,
// //               background:
// //                 "radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.45) 45%, transparent 75%)",
// //             }}
// //             className="pointer-events-none absolute inset-0 z-20"
// //           />

// //           {/* TOP LABEL */}
// //           <div className="absolute right-5 top-5 z-40 rounded-full border border-sky-200 bg-white/70 px-3 py-2 text-[10px] font-semibold text-sky-700 backdrop-blur-xl">
// //             <span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316]" />
// //             Digital Network
// //           </div>

// //           {/* BOTTOM LABELS */}
// //           <motion.div
// //             style={{ opacity: bottomLabelO }}
// //             className="absolute bottom-5 left-0 right-0 z-30 flex items-center justify-between px-6"
// //           >
// //             <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-sky-800/60">
// //               Connected Digital Ecosystem
// //             </p>
// //             <p className="text-[9px] font-bold tracking-[0.2em] text-sky-800/40">
// //               FORNEX / 01
// //             </p>
// //           </motion.div>

// //           {/* RANK CARDS */}
// //           <motion.div
// //             style={{ opacity: c1O, y: c1Y }}
// //             className="pointer-events-none absolute left-4 top-16 z-30 lg:left-10"
// //           >
// //             <div className="origin-top-left max-md:scale-[0.78]">
// //               <SearchCard pos={pos} rank={rank} />
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             style={{ opacity: c2O, y: c2Y }}
// //             className="pointer-events-none absolute bottom-6 right-4 z-30 lg:right-10"
// //           >
// //             <div className="origin-bottom-right max-md:scale-[0.78]">
// //               <MapsCard mapRank={mapRank} starsO={starsO} />
// //             </div>
// //           </motion.div>

// //           {/* HEADLINE REVEAL */}
// //           <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center">
// //             <motion.p
// //               style={{ opacity: kickerO, y: kickerY }}
// //               className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-orange-600 sm:text-xs"
// //             >
// //               Fornex · Global Reach
// //             </motion.p>

// //             <h2 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-7xl">
// //               <Word p={p} i={0}>Grow</Word>
// //               <Word p={p} i={1}>Your</Word>
// //               <Word p={p} i={2}>Business</Word>
// //               <br />
// //               <Word p={p} i={3} accent>Worldwide</Word>
// //             </h2>

// //             <motion.p
// //               style={{ opacity: subO, y: subY }}
// //               className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base"
// //             >
// //               Websites, Google Business Profile and SEO that put your brand in
// //               front of customers everywhere.
// //             </motion.p>

// //             <motion.a
// //               href="#contact"
// //               style={{ opacity: ctaO, y: ctaY }}
// //               className="pointer-events-auto mt-8 inline-flex items-center gap-3 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-900/15 transition hover:-translate-y-1 hover:bg-brand-900"
// //             >
// //               Start a Project <span>→</span>
// //             </motion.a>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }
// import { useRef } from "react";
// import {
//   motion,
//   useMotionTemplate,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "motion/react";
// import DigitalGlobe from "./DigitakGlobe"; // filename spelling check pannunga

// const EASE = [0.22, 1, 0.36, 1];

// const rise = (i) => ({
//   initial: { opacity: 0, y: 28 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: EASE },
// });

// /* One word of the scroll-revealed headline */
// function Word({ p, i, accent, children }) {
//   const s = 0.22 + i * 0.08;
//   const e = s + 0.12;
//   const o = useTransform(p, [s, e], [0, 1]);
//   const y = useTransform(p, [s, e], [40, 0]);
//   const b = useTransform(p, [s, e], [12, 0]);
//   const filter = useMotionTemplate`blur(${b}px)`;

//   return (
//     <motion.span
//       style={{ opacity: o, y, filter }}
//       className={`mr-[0.2em] inline-block ${accent ? "gradient-text" : ""}`}
//     >
//       {children}
//     </motion.span>
//   );
// }

// export default function MorphHero() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const p = useSpring(scrollYProgress, {
//     stiffness: 140,
//     damping: 30,
//     mass: 0.3,
//   });

//   // Hero text goes out
//   const heroO = useTransform(p, [0, 0.18], [1, 0]);
//   const heroY = useTransform(p, [0, 0.2], [0, -30]);
//   const heroPE = useTransform(p, (v) => (v > 0.15 ? "none" : "auto"));

//   // Reveal text comes in
//   const kickerO = useTransform(p, [0.18, 0.28], [0, 1]);
//   const kickerY = useTransform(p, [0.18, 0.28], [20, 0]);
//   const subO = useTransform(p, [0.58, 0.7], [0, 1]);
//   const subY = useTransform(p, [0.58, 0.7], [24, 0]);
//   const ctaO = useTransform(p, [0.68, 0.8], [0, 1]);
//   const ctaY = useTransform(p, [0.68, 0.8], [24, 0]);
//   const ctaPE = useTransform(p, (v) => (v > 0.7 ? "auto" : "none"));

//   return (
//     <section id="home" ref={ref} className="relative h-[200vh]">
//       <div className="sticky top-0 h-screen overflow-hidden bg-[#F8FAFC]">
//         {/* SUBTLE BACKGROUND */}
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute -top-40 left-1/3 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-[120px]" />
//           <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0F172A_1px,transparent_1px),linear-gradient(90deg,#0F172A_1px,transparent_1px)] [background-size:48px_48px]" />
//         </div>

//         {/* LEFT AREA: hero text + reveal text in the same place */}
//         <div
//           className="
//             container-width absolute left-0 top-1/2 z-10
//             w-[48%] -translate-y-1/2 px-6
//             max-lg:w-[47%]
//             max-md:top-[7%] max-md:w-full
//             max-md:translate-y-0 max-md:px-6
//           "
//         >
//           <div className="relative mx-auto max-w-xl lg:mx-0">
//             {/* HERO TEXT (fades out on scroll) */}
//             <motion.div
//               style={{ opacity: heroO, y: heroY, pointerEvents: heroPE }}
//               className="text-center lg:text-left"
//             >
//               <motion.p
//                 {...rise(0)}
//                 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-700 sm:text-xs"
//               >
//                 FORNEX IT SOLUTIONS
//               </motion.p>

//               <motion.h1
//                 {...rise(1)}
//                 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[68px]"
//               >
//                 Connecting
//                 <br />
//                 Technology.
//                 <br />
//                 <span className="gradient-text">Creating Growth.</span>
//               </motion.h1>

//               <motion.p
//                 {...rise(2)}
//                 className="mt-6 max-w-lg text-sm leading-7 text-slate-500 sm:text-base sm:leading-8"
//               >
//                 We build digital products, strengthen your Google Business
//                 Profile, and improve search visibility through strategic SEO.
//                 Everything your business needs to grow online.
//               </motion.p>

//               <motion.div
//                 {...rise(3)}
//                 className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
//               >
//                 <Link
//                   to="/contact"
//                   className="group inline-flex items-center gap-3 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-900"
//                 >
//                   Start a Project
//                   <span className="transition-transform group-hover:translate-x-1">
//                     →
//                   </span>
//                 </Link>
//                 <Link
//                   to="/services"
//                   className="text-sm font-semibold text-slate-600 transition hover:text-brand-700"
//                 >
//                   Explore Services ↗
//                 </Link>
//               </motion.div>

//               <motion.div
//                 {...rise(4)}
//                 className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400 lg:justify-start sm:text-xs"
//               >
//                 <span>Digital Products</span>
//                 <span>Google Business Profile</span>
//                 <span>SEO</span>
//               </motion.div>
//             </motion.div>

//             {/* REVEAL TEXT (words appear on scroll) */}
//             <div className="absolute inset-0 flex flex-col justify-center text-center lg:text-left">
//               <motion.p
//                 style={{ opacity: kickerO, y: kickerY }}
//                 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-700 sm:text-xs"
//               >
//                 Fornex · Global Reach
//               </motion.p>

//               <h2 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[68px]">
//                 <Word p={p} i={0}>Grow</Word>
//                 <Word p={p} i={1}>Your</Word>
//                 <br />
//                 <Word p={p} i={2}>Business</Word>
//                 <br />
//                 <Word p={p} i={3} accent>Worldwide</Word>
//               </h2>

//               <motion.p
//                 style={{ opacity: subO, y: subY }}
//                 className="mt-6 max-w-lg text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 max-lg:mx-auto"
//               >
//                 Websites, Google Business Profile and SEO that put your brand
//                 in front of customers everywhere.
//               </motion.p>

//               <motion.div
//                 style={{ opacity: ctaO, y: ctaY, pointerEvents: ctaPE }}
//                 className="mt-8 flex justify-center lg:justify-start"
//               >
//                 <Link
//                   to="/contact"
//                   className="group inline-flex items-center gap-3 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-900"
//                 >
//                   Start a Project
//                   <span className="transition-transform group-hover:translate-x-1">
//                     →
//                   </span>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* GLOBE: direct, no card, no background, no movement */}
//         <div
//           className="
//             absolute right-[3%] top-1/2 z-20
//             w-[min(48vw,700px)] -translate-y-1/2
//             max-lg:w-[46vw]
//             max-md:right-1/2 max-md:top-auto max-md:bottom-[3%]
//             max-md:w-[92vw] max-md:translate-x-1/2 max-md:translate-y-0
//           "
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.94 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2, ease: EASE }}
//           >
//             <DigitalGlobe />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

const rise = (i) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: EASE },
});

function Word({ p, i, accent, children }) {
  const start = 0.22 + i * 0.08;
  const end = start + 0.12;
  const opacity = useTransform(p, [start, end], [0, 1]);
  const y = useTransform(p, [start, end], [40, 0]);
  const blur = useTransform(p, [start, end], [12, 0]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className={`mr-[0.2em] inline-block ${accent ? "gradient-text" : ""}`}
    >
      {children}
    </motion.span>
  );
}

/* Each visual scene occupies the same right-side space and cross-fades on scroll. */
function ScrollScene({ p, start, end, children, className = "" }) {
  const opacity = useTransform(
    p,
    [start - 0.12, start, end, end + 0.12],
    [0, 1, 1, 0]
  );
  const y = useTransform(p, [start, end], [34, -24]);
  const scale = useTransform(p, [start, end], [0.94, 1.02]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className={`absolute inset-0 flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SceneFrame({ label, number, children }) {
  return (
    <div className="relative w-full max-w-[610px] overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-3 shadow-[0_35px_100px_rgba(15,40,90,0.16)] backdrop-blur-xl sm:rounded-[34px] sm:p-4">
      <div className="mb-3 flex items-center justify-between px-1 sm:mb-4 sm:px-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-[10px]">
            {label}
          </span>
        </div>
        <span className="text-[9px] font-bold tracking-[0.2em] text-slate-300 sm:text-[10px]">
          FORNEX / {number}
        </span>
      </div>
      {children}
    </div>
  );
}

function ProductScene() {
  const products = [
    { name: "Everyday Sneakers", category: "FOOTWEAR", price: "$89.00", old: "$120.00", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=480&q=85", tone: "bg-[#F5F0EA]" },
    { name: "Minimal Watch", category: "ACCESSORIES", price: "$149.00", old: "$189.00", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=480&q=85", tone: "bg-[#F1F3F5]" },
    { name: "Studio Headphones", category: "AUDIO", price: "$119.00", old: "$159.00", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=480&q=85", tone: "bg-[#F2F0EB]" },
  ];

  return (
    <SceneFrame label="E-commerce product experience" number="01">
      <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-3 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-[11px] font-black text-white">N</span>
            <span className="text-[11px] font-black tracking-tight text-slate-900 sm:text-sm">NORTH / STORE</span>
          </div>
          <div className="hidden items-center gap-4 text-[9px] font-medium text-slate-500 sm:flex"><span>Shop</span><span>Collections</span><span>About</span></div>
          <div className="flex items-center gap-2 text-slate-700"><span className="text-sm">⌕</span><span className="text-sm">♧</span><span className="rounded-full bg-slate-100 px-2 py-1 text-[8px] font-bold">BAG 02</span></div>
        </div>
        <div className="flex items-end justify-between px-3 pb-3 pt-4 sm:px-5 sm:pb-4 sm:pt-5">
          <div><p className="text-[7px] font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-[8px]">CURATED FOR EVERYDAY</p><h3 className="mt-1 text-base font-black tracking-tight text-slate-950 sm:text-2xl">Featured products<span className="text-blue-600">.</span></h3></div>
          <span className="pb-1 text-[8px] font-semibold text-slate-500 sm:text-[9px]">View all products ↗</span>
        </div>
        <div className="grid grid-cols-3 gap-2 px-3 pb-3 sm:gap-3 sm:px-5 sm:pb-5">
          {products.map((item) => (
            <article key={item.name} className="min-w-0 overflow-hidden rounded-xl border border-slate-100 bg-white">
              <div className={`relative ${item.tone} aspect-[1/0.92] overflow-hidden`}>
                <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                <span className="absolute left-1.5 top-1.5 rounded-full bg-white/95 px-1.5 py-1 text-[6px] font-bold uppercase tracking-wide text-slate-700 sm:left-2 sm:top-2 sm:text-[7px]">New</span>
              </div>
              <div className="p-2 sm:p-3"><p className="truncate text-[6px] font-bold tracking-[0.12em] text-slate-400 sm:text-[7px]">{item.category}</p><p className="mt-1 truncate text-[8px] font-bold text-slate-900 sm:text-[10px]">{item.name}</p><div className="mt-1.5 flex flex-wrap items-center gap-1"><span className="text-[8px] font-extrabold text-slate-900 sm:text-[10px]">{item.price}</span><span className="text-[7px] text-slate-400 line-through">{item.old}</span></div></div>
            </article>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-3 py-2 sm:px-5"><span className="text-[7px] font-semibold text-slate-500 sm:text-[8px]">A complete online store experience</span><span className="rounded-full bg-slate-950 px-3 py-1.5 text-[7px] font-bold text-white sm:text-[8px]">SHOP NOW ↗</span></div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 px-1 sm:mt-4 sm:px-2">{["E-commerce", "Product catalogs", "Payments", "Order management"].map((item) => <span key={item} className="rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1.5 text-[8px] font-semibold text-blue-700 sm:text-[9px]">{item}</span>)}</div>
    </SceneFrame>
  );
}

function MarketingScene() {
  return (
    <SceneFrame label="Digital marketing intelligence" number="02">
      <div className="rounded-[20px] bg-[#081A36] p-3 text-white sm:p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-blue-200/60 sm:text-[9px]">Campaign overview</p>
            <h3 className="mt-1 text-base font-bold sm:text-xl">Marketing that moves</h3>
          </div>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[8px] font-semibold text-emerald-300 sm:text-[9px]">● Live insights</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
          {[
            ["SEO", "Visibility", "+38%"],
            ["GBP", "Local reach", "+52%"],
            ["SOCIAL", "Engagement", "+26%"],
          ].map(([tag, title, value]) => (
            <div key={tag} className="rounded-xl border border-white/10 bg-white/[0.06] p-2 sm:p-3">
              <p className="text-[7px] font-bold tracking-[0.16em] text-blue-200/60 sm:text-[8px]">{tag}</p>
              <p className="mt-2 text-[8px] text-slate-300 sm:text-[10px]">{title}</p>
              <p className="mt-1 text-sm font-bold text-emerald-300 sm:text-lg">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.05] p-3 sm:mt-4 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[9px] font-semibold text-slate-200 sm:text-[10px]">Audience growth</span>
            <span className="text-[8px] text-blue-200/60 sm:text-[9px]">Last 6 months</span>
          </div>
          <div className="flex h-[72px] items-end gap-2 sm:h-[105px] sm:gap-3">
            {[28, 40, 34, 56, 66, 58, 78, 92, 82, 100, 90, 116].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-blue-700 to-cyan-300" style={{ height: `${height / 1.16}%`, opacity: 0.55 + index * 0.035 }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[7px] text-slate-400 sm:text-[8px]">
            <span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 px-1 sm:mt-4 sm:px-2">
        {["SEO strategy", "Google Ads", "Social media", "Analytics"].map((item) => (
          <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[8px] font-semibold text-slate-600 sm:text-[9px]">{item}</span>
        ))}
      </div>
    </SceneFrame>
  );
}

function GrowthScene() {
  const bars = [34, 42, 38, 52, 48, 62, 58, 74, 69, 83, 78, 96, 88, 100];
  return (
    <SceneFrame label="Google Search Console preview" number="03">
      <div className="overflow-hidden rounded-[18px] border border-[#DADCE0] bg-white text-[#202124]">
        <div className="flex items-center justify-between border-b border-[#E8EAED] px-3 py-2.5 sm:px-4">
          <div className="flex items-center gap-2"><div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#E8F0FE]"><svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true"><path fill="#4285F4" d="M12 3a9 9 0 0 0-8.2 5.3l3.1 1.8A5.5 5.5 0 0 1 16 7.5l2.6-2.6A8.9 8.9 0 0 0 12 3Z"/><path fill="#34A853" d="M20.7 12.2c0-.6-.1-1.2-.2-1.8H12v3.5h4.9a5.2 5.2 0 0 1-2 2.8l2.9 2.2a9 9 0 0 0 2.9-6.7Z"/><path fill="#FBBC04" d="M4 15.5A9 9 0 0 0 12 21c2.4 0 4.5-.8 6-2.2l-3-2.2a5.4 5.4 0 0 1-8-2.8L4 15.5Z"/><path fill="#EA4335" d="M6.9 12a5.4 5.4 0 0 1 .3-1.9L4 8.3A9 9 0 0 0 4 15.5l3-2.3a5.4 5.4 0 0 1-.1-1.2Z"/></svg></div><span className="text-[10px] font-medium sm:text-xs">Google Search Console</span></div>
          <span className="rounded-full border border-[#DADCE0] px-2.5 py-1 text-[7px] text-[#5F6368] sm:text-[8px]">Demo property ▾</span>
        </div>
        <div className="flex min-h-[250px] sm:min-h-[320px]">
          <aside className="hidden w-[112px] shrink-0 border-r border-[#E8EAED] bg-[#F8F9FA] p-2 sm:block">
            <div className="mb-3 rounded-full bg-[#D3E3FD] px-2 py-1.5 text-[7px] font-semibold text-[#174EA6]">◷ Overview</div>
            <p className="mb-2 px-2 text-[7px] font-semibold text-[#5F6368]">Performance</p><div className="rounded-full bg-[#D3E3FD] px-2 py-1.5 text-[7px] font-semibold text-[#174EA6]">▥ Search results</div><p className="mt-2 px-2 text-[7px] text-[#5F6368]">Discover</p><p className="mt-3 px-2 text-[7px] font-semibold text-[#5F6368]">Indexing</p><p className="mt-2 px-2 text-[7px] text-[#5F6368]">Pages</p><p className="mt-2 px-2 text-[7px] text-[#5F6368]">Sitemaps</p><p className="mt-2 px-2 text-[7px] text-[#5F6368]">Removals</p>
          </aside>
          <div className="min-w-0 flex-1 p-3 sm:p-4">
            <div className="flex flex-wrap items-center justify-between gap-2"><div><h3 className="text-[11px] font-medium sm:text-sm">Search results</h3><p className="mt-0.5 text-[7px] text-[#5F6368] sm:text-[8px]">Performance · Last 3 months</p></div><span className="rounded border border-[#DADCE0] px-2 py-1 text-[7px] text-[#5F6368]">Last 3 months ▾</span></div>
            <div className="mt-3 grid grid-cols-2 gap-1.5 sm:mt-4 sm:grid-cols-4 sm:gap-2">
              <div className="rounded-md bg-[#4285F4] p-2 text-white"><p className="text-[7px] opacity-90">Total clicks</p><p className="mt-1 text-base font-semibold sm:text-xl">1.28K</p></div>
              <div className="rounded-md bg-[#1A73E8] p-2 text-white"><p className="text-[7px] opacity-90">Total impressions</p><p className="mt-1 text-base font-semibold sm:text-xl">24.6K</p></div>
              <div className="rounded-md border border-[#DADCE0] p-2"><p className="text-[7px] text-[#5F6368]">Average CTR</p><p className="mt-1 text-base font-semibold sm:text-xl">5.2%</p></div>
              <div className="rounded-md border border-[#DADCE0] p-2"><p className="text-[7px] text-[#5F6368]">Average position</p><p className="mt-1 text-base font-semibold sm:text-xl">8.4</p></div>
            </div>
            <div className="mt-3 rounded-lg border border-[#E8EAED] p-2.5 sm:mt-4 sm:p-3">
              <div className="mb-2 flex items-center justify-between"><span className="text-[8px] font-medium text-[#3C4043] sm:text-[9px]">Performance over time</span><span className="text-[7px] text-[#5F6368]">Clicks · Impressions</span></div>
              <div className="relative h-[75px] sm:h-[104px]">
                {[25, 50, 75, 100].map((v) => <div key={v} className="absolute left-0 right-0 border-t border-dashed border-[#E8EAED]" style={{ top: `${100-v}%` }} />)}
                <svg viewBox="0 0 420 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full"><polyline points={bars.map((v,i)=>`${i*32},${96-v*.72}`).join(' ')} fill="none" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points={bars.map((v,i)=>`${i*32},${96-v*.9+12}`).join(' ')} fill="none" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="mt-1 flex justify-between text-[6px] text-[#80868B]"><span>SEP 01</span><span>SEP 15</span><span>OCT 01</span><span>OCT 15</span><span>NOV 01</span></div>
            </div>
            <div className="mt-3 flex items-center justify-between border-b border-[#E8EAED] pb-1.5"><span className="text-[8px] font-medium sm:text-[9px]">Top queries</span><span className="text-[7px] text-[#1A73E8]">View report →</span></div>
            <div className="space-y-2 pt-2"><div className="flex justify-between text-[7px] text-[#5F6368]"><span>website development</span><span>342 clicks</span></div><div className="flex justify-between text-[7px] text-[#5F6368]"><span>digital marketing services</span><span>218 clicks</span></div></div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 px-1 sm:mt-4 sm:px-2">{["Search Console", "Technical SEO", "Keyword tracking", "Organic growth"].map((item) => <span key={item} className="rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1.5 text-[8px] font-semibold text-blue-700 sm:text-[9px]">{item}</span>)}</div>
    </SceneFrame>
  );
}

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const p = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
  });

  const heroO = useTransform(p, [0, 0.18], [1, 0]);
  const heroY = useTransform(p, [0, 0.2], [0, -30]);
  const heroPE = useTransform(p, (v) => (v > 0.15 ? "none" : "auto"));
  const kickerO = useTransform(p, [0.18, 0.28], [0, 1]);
  const kickerY = useTransform(p, [0.18, 0.28], [20, 0]);
  const subO = useTransform(p, [0.58, 0.7], [0, 1]);
  const subY = useTransform(p, [0.58, 0.7], [24, 0]);
  const ctaO = useTransform(p, [0.68, 0.8], [0, 1]);
  const ctaY = useTransform(p, [0.68, 0.8], [24, 0]);
  const ctaPE = useTransform(p, (v) => (v > 0.7 ? "auto" : "none"));

  return (
    <section id="home" ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#F8FAFC]">
        {/* Soft background lighting and grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/3 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[120px]" />
          <div className="absolute -bottom-48 right-0 h-[500px] w-[500px] rounded-full bg-indigo-100/40 blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0F172A_1px,transparent_1px),linear-gradient(90deg,#0F172A_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        {/* LEFT: original hero + scroll-revealed headline */}
        <div className="container-width absolute left-0 top-1/2 z-10 w-[48%] -translate-y-1/2 px-6 max-lg:w-[47%] max-md:top-[6%] max-md:w-full max-md:translate-y-0 max-md:px-5">
          <div className="relative mx-auto max-w-xl lg:mx-0">
            <motion.div
              style={{ opacity: heroO, y: heroY, pointerEvents: heroPE }}
              className="text-center lg:text-left"
            >
              <motion.p {...rise(0)} className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-700 sm:text-xs">
                FORNEX IT SOLUTIONS
              </motion.p>
              <motion.h1 {...rise(1)} className="font-heading text-4xl font-extrabold leading-[1.1] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[68px]">
                Connecting<br />Technology.<br /><span className="gradient-text">Creating Growth.</span>
              </motion.h1>
              <motion.p {...rise(2)} className="mt-6 max-w-lg text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                We build digital products, strengthen your Google Business Profile, and improve search visibility through strategic SEO. Everything your business needs to grow online.
              </motion.p>
              <motion.div {...rise(3)} className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
                <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-900">
                  Start a Project <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link to="/services" className="text-sm font-semibold text-slate-600 transition hover:text-brand-700">Explore Services ↗</Link>
              </motion.div>
              <motion.div {...rise(4)} className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400 lg:justify-start sm:text-xs">
                <span>Digital Products</span><span>Google Business Profile</span><span>SEO</span>
              </motion.div>
            </motion.div>

            <div className="pointer-events-none absolute inset-0 flex flex-col justify-center text-center lg:text-left">
              <motion.p style={{ opacity: kickerO, y: kickerY }} className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-700 sm:text-xs">
                Fornex · Digital Growth Partner
              </motion.p>
              <h2 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[68px]">
                <Word p={p} i={0}>Grow</Word><Word p={p} i={1}>Your</Word><br />
                <Word p={p} i={2}>Business</Word><br />
                <Word p={p} i={3} accent>Worldwide</Word>
              </h2>
              <motion.p style={{ opacity: subO, y: subY }} className="mt-6 max-w-lg text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 max-lg:mx-auto">
                Websites, Google Business Profile and SEO that put your brand in front of customers everywhere.
              </motion.p>
              <motion.div style={{ opacity: ctaO, y: ctaY, pointerEvents: ctaPE }} className="mt-8 flex justify-center lg:justify-start">
                <Link to="/contact" className="pointer-events-auto group inline-flex items-center gap-3 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-900">
                  Start a Project <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* RIGHT: three scroll-linked scenes replace the globe */}
        <div className="absolute right-[3%] top-1/2 z-20 h-[min(72vh,650px)] w-[min(49vw,700px)] -translate-y-1/2 max-lg:right-[2%] max-lg:w-[49vw] max-md:right-1/2 max-md:top-auto max-md:bottom-[3%] max-md:h-[36vh] max-md:w-[94vw] max-md:translate-x-1/2 max-md:translate-y-0">
          <div className="pointer-events-none absolute inset-8 rounded-full bg-blue-300/25 blur-[80px]" />
          <ScrollScene p={p} start={0} end={0.38}>
            <ProductScene />
          </ScrollScene>
          <ScrollScene p={p} start={0.34} end={0.69}>
            <MarketingScene />
          </ScrollScene>
          <ScrollScene p={p} start={0.65} end={1}>
            <GrowthScene />
          </ScrollScene>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-1.5 shadow-lg backdrop-blur-md max-md:hidden">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500">Build · Market · Grow</span>
          </div>
        </div>
      </div>
    </section>
  );
}
