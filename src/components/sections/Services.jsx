import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { LOGO_MARK, services } from "../../data";
import { SectionHeading } from "../Shared";

function WheelItem({ s, i, rot, active }) {
  const inner = useTransform(rot, (v) => -v - i * 60);
  return (
    <div className="absolute left-1/2 top-1/2 -ml-8 -mt-8 h-16 w-16 [--r:122px] sm:[--r:205px]" style={{ transform: `rotate(${i * 60}deg) translateY(calc(var(--r) * -1))` }}>
      <motion.div style={{ rotate: inner }} className={`grid h-16 w-16 place-items-center rounded-2xl border font-heading text-xl font-bold shadow-lg transition-colors duration-300 ${active ? "border-brand-700 bg-brand-700 text-white" : "border-brand-200 bg-white text-brand-700"}`}>{s.icon}</motion.div>
    </div>
  );
}

export default function WorksWheel() {
  const ref = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const rot = useTransform(p, [0, 1], [0, -300]);
  const [active, setActive] = useState(0);
  useMotionValueEvent(p, "change", (v) => setActive(Math.min(5, Math.max(0, Math.round(v * 5)))));
  const s = services[active];
  return (
    <section id="services" ref={ref} className="relative h-[420vh]">
      <div className="sticky top-0 flex h-screen items-center">
        <div className="container-width grid items-center gap-8 lg:grid-cols-2">
          <div className="min-h-[300px]">
            <SectionHeading eyebrow="What we do" title="End-to-end digital solutions." />
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }}>
                <h3 className="font-heading text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">{s.desc}</p>
                <ul className="mt-4 space-y-2">{s.tags.map((t) => <li key={t} className="flex gap-2 text-sm font-medium text-slate-700"><span className="text-brand-600">✓</span>{t}</li>)}</ul>
                <a href="#contact" className="mt-5 inline-flex text-sm font-bold text-brand-700">Discuss this service ↗</a>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="relative mx-auto h-[330px] w-[330px] sm:h-[520px] sm:w-[520px]">
            <div className="absolute inset-[13%] rounded-full border border-dashed border-brand-300" />
            <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-950 p-4 shadow-xl sm:h-32 sm:w-32"><img src={LOGO_MARK} alt="" className="h-full w-full object-contain" /></div>
            <motion.div style={{ rotate: rot }} className="absolute inset-0">
              {services.map((x, i) => <WheelItem key={x.title} s={x} i={i} rot={rot} active={i === active} />)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 5. Scroll stacking cards: process steps pile up */
