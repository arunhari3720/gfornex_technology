import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonials } from "../../data";
import { SectionHeading } from "../Shared";

export default function CircularTestimonials() {
  const [a, setA] = useState(0);
  const q = testimonials[a];
  const n = testimonials.length;
  return (
    <section className="bg-brand-50/70 py-24 sm:py-28">
      <div className="container-width">
        <SectionHeading center eyebrow="Client feedback" title="What working with us feels like." />
        <div className="relative mx-auto h-[420px] w-full max-w-[460px] sm:h-[480px] sm:max-w-[520px]">
          <div className="absolute inset-[8%] rounded-full border border-dashed border-brand-300" />
          {testimonials.map((t, i) => (
            <button key={i} onClick={() => setA(i)} aria-label={`Show feedback ${i + 1}`} className="absolute left-1/2 top-1/2 -ml-7 -mt-7 h-14 w-14 [--r:175px] sm:[--r:205px]" style={{ transform: `rotate(${(360 / n) * i}deg) translateY(calc(var(--r) * -1)) rotate(${-(360 / n) * i}deg)` }}>
              <span className={`grid h-14 w-14 place-items-center rounded-full border-2 font-heading font-bold transition ${i === a ? "scale-110 border-brand-700 bg-brand-700 text-white" : "border-brand-200 bg-white text-brand-700"}`}>{t.name[0]}</span>
            </button>
          ))}
          <div className="absolute inset-[22%] grid place-items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div key={a} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <p className="text-sm leading-6 text-slate-700 sm:text-base">“{q.quote}”</p>
                <p className="mt-3 font-heading text-sm font-bold">{q.name}</p>
                <p className="text-xs text-slate-500">{q.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
