import { motion } from "motion/react";
import { reasons } from "../../data";
import { SectionHeading } from "../Shared";

const diagrams = [
  <svg key="a" viewBox="0 0 200 50" className="h-16 w-full text-brand-600"><path pathLength="1" className="draw" d="M10 40 H70 V15 H130 V30 H190" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />{[10, 70, 130, 190].map((x) => <circle key={x} cx={x} cy={x === 10 ? 40 : x === 70 ? 15 : x === 130 ? 15 : 30} r="4" fill="currentColor" />)}</svg>,
  <svg key="b" viewBox="0 0 100 60" className="h-16 w-full text-brand-600"><circle className="ring" cx="50" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="2" /><circle className="ring" style={{ animationDelay: "1s" }} cx="50" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="50" cy="30" r="9" fill="currentColor" /><path d="M46 30 l3 3 l6 -6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>,
  <div key="c" className="space-y-2 py-1">{["w-2/3", "w-1/2 ml-auto", "w-3/5"].map((w, i) => <div key={i} style={{ animationDelay: `${i * 0.7}s` }} className={`typing h-3 rounded-full ${i === 1 ? "bg-brand-600" : "bg-brand-200"} ${w}`} />)}</div>,
  <div key="d" className="relative flex h-16 items-center justify-between px-2"><div className="h-9 w-9 rounded-lg bg-brand-200" /><div className="absolute left-12 right-12 top-1/2 h-px bg-brand-300" /><i className="travel absolute left-12 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand-600" /><div className="h-9 w-9 rounded-lg bg-brand-600" /></div>,
  <svg key="e" viewBox="0 0 200 50" className="h-16 w-full text-brand-600"><path pathLength="1" className="draw" d="M0 25 H40 L50 5 L60 45 L70 25 H110 L120 10 L130 40 L140 25 H200" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="f" viewBox="0 0 120 60" className="h-16 w-full text-brand-600"><path d="M20 30 H60 M60 30 L100 14 M60 30 L100 46" stroke="currentColor" strokeWidth="1.5" opacity=".4" />{[[20, 30], [60, 30], [100, 14], [100, 46]].map(([x, y], i) => <circle key={i} className="ring" style={{ animationDelay: `${i * 0.5}s` }} cx={x} cy={y} r="6" fill="currentColor" />)}</svg>,
];

export  default function Bento() {
  const spans = ["lg:col-span-2", "", "", "", "lg:col-span-2", ""];
  return (
    <section id="why" className="bg-brand-50/70 py-24 sm:py-28">
      <div className="container-width">
        <SectionHeading eyebrow="Why Fornex" title="Good technology. Clear communication. No surprises." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([t, d], i) => (
            <motion.div key={t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: (i % 3) * 0.08 }} className={`rounded-3xl border border-brand-100 bg-white p-6 ${spans[i]}`}>
              <div className="mb-5 rounded-2xl bg-brand-50 px-4 py-3">{diagrams[i]}</div>
              <h3 className="font-heading font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 9. Flipping deck of sample layouts (swap the mock for <img> screenshots when you have them) */
