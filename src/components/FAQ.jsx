import { useState } from "react";
import { faqs } from "../data";
import { SectionHeading } from "./Shared";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <section id="faq" className="py-24 sm:py-28">
      <div className="container-width max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="A few things you might want to know." desc="Still have a question? Send us a message and we’ll be happy to help." center />
        <div className="divide-y divide-brand-200 border-y border-brand-200">
          {faqs.map(([q, a], i) => (
            <div key={q} className="py-5">
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-5 text-left font-heading text-base font-bold text-brand-900 sm:text-lg">
                <span>{q}</span><span className={`text-xl text-brand-600 transition ${openFaq === i ? "rotate-180" : ""}`}>⌄</span>
              </button>
              {openFaq === i && <p className="max-w-3xl pt-4 text-sm leading-7 text-slate-600">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
