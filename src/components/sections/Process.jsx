import { steps } from "../../data";
import { SectionHeading } from "../Shared";

export default function StackingProcess() {
  const tones = ["bg-brand-700", "bg-brand-600", "bg-brand-800", "bg-brand-900"];
  return (
    <section id="process" className="bg-brand-900 py-24 text-white sm:py-28">
      <div className="container-width">
        <SectionHeading dark eyebrow="How we work" title="A clear path from idea to launch." desc="A collaborative process that keeps decisions visible and progress predictable." />
        <div className="pb-10">
          {steps.map(([t, d], i) => (
            <div key={t} className="sticky mb-8" style={{ top: `${96 + i * 26}px` }}>
              <div className={`${tones[i]} flex min-h-[220px] flex-col justify-between rounded-3xl border border-white/15 p-7 shadow-2xl sm:p-10`}>
                <span className="font-heading text-5xl font-bold text-brand-200">{i + 1}</span>
                <div><h3 className="font-heading text-2xl font-bold">{t}</h3><p className="mt-2 max-w-xl text-sm leading-7 text-brand-100/80">{d}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. Horizontal scroll gallery */
