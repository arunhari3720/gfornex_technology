import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { samples } from "../../data";
import { SectionHeading } from "../Shared";

export default function FlipDeck() {
  const [i, setI] = useState(0);
  const fills = ["from-brand-200 to-brand-500", "from-brand-300 to-brand-700", "from-brand-100 to-brand-600", "from-brand-400 to-brand-800"];
  const [t, d] = samples[i];
  return (
    <section className="py-24 sm:py-28">
      <div className="container-width grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Sample layouts" title="The kind of work we build." desc="Flip through example layouts. Real project screenshots can replace these." />
          <div className="flex gap-3">
            <button onClick={() => setI((i + samples.length - 1) % samples.length)} className="rounded-full border border-brand-200 px-5 py-3 text-sm font-bold text-brand-800 hover:bg-brand-50">Previous</button>
            <button onClick={() => setI((i + 1) % samples.length)} className="rounded-full bg-brand-700 px-5 py-3 text-sm font-bold text-white hover:bg-brand-800">Next</button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md" style={{ perspective: 1400 }}>
          <div className="absolute inset-x-6 top-4 h-full rounded-3xl bg-brand-200/70" />
          <div className="absolute inset-x-3 top-2 h-full rounded-3xl bg-brand-300/70" />
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ rotateY: -90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} exit={{ rotateY: 90, opacity: 0 }} transition={{ duration: 0.4 }} className="relative overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-2xl shadow-brand-200">
              <div className="flex items-center gap-1.5 border-b border-brand-100 px-4 py-3"><i className="h-2.5 w-2.5 rounded-full bg-brand-200" /><i className="h-2.5 w-2.5 rounded-full bg-brand-300" /><i className="h-2.5 w-2.5 rounded-full bg-brand-400" /><span className="ml-3 h-4 flex-1 rounded-full bg-brand-50" /></div>
              <div className={`h-52 bg-gradient-to-br ${fills[i]} p-6`}><div className="h-3 w-1/3 rounded bg-white/70" /><div className="mt-4 h-8 w-2/3 rounded bg-white/50" /><div className="mt-6 grid grid-cols-3 gap-2"><i className="h-14 rounded bg-white/40" /><i className="h-14 rounded bg-white/55" /><i className="h-14 rounded bg-white/70" /></div></div>
              <div className="p-6"><h3 className="font-heading text-lg font-bold">{t}</h3><p className="mt-1 text-sm text-slate-600">{d}</p></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* 10. Circular testimonials */
