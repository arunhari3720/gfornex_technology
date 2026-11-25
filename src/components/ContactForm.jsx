import { useState } from "react";
import { services } from "../data";
import { SectionHeading } from "./Shared";

export default function ContactForm() {
  const [selected, setSelected] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const toggleService = (name) => setSelected((old) => old.includes(name) ? old.filter((x) => x !== name) : [...old, name]);

  const submitForm = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nServices: ${selected.join(", ") || "Not specified"}\n\n${form.message}`;
    window.location.href = `mailto:gfornex.official@gmail.com?subject=${encodeURIComponent(`New project enquiry from ${form.name}`)}&body=${encodeURIComponent(body)}`;
  };
  const field = "mt-2 w-full rounded-xl border border-brand-200 bg-brand-50/60 px-4 py-3 font-normal outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100";

  return (
    <section id="contact" className="bg-brand-50/70 py-24 sm:py-28">
      <div className="container-width grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Start a conversation" title="Let’s discuss your project." desc="Tell us what you’re planning. We’ll get back to you with questions and suggested next steps." />
          <a href="mailto:gfornex.official@gmail.com" className="inline-flex items-center gap-3 text-base font-bold text-brand-700 hover:text-brand-900"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100">✉</span>gfornex.official@gmail.com</a>
          <p className="mt-5 text-sm text-slate-500">Madurai, Tamil Nadu, India</p>
        </div>
        <form onSubmit={submitForm} className="rounded-3xl border border-brand-100 bg-white p-6 shadow-xl shadow-brand-100 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold text-brand-900">Your name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} placeholder="Enter your name" /></label>
            <label className="text-sm font-bold text-brand-900">Your email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} placeholder="you@example.com" /></label>
          </div>
          <div className="mt-6"><p className="mb-3 text-sm font-bold">What do you need?</p><div className="flex flex-wrap gap-2">{services.map((s) => <button type="button" key={s.title} onClick={() => toggleService(s.title)} className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition ${selected.includes(s.title) ? "border-brand-700 bg-brand-700 text-white" : "border-brand-200 bg-white text-slate-600 hover:border-brand-400 hover:bg-brand-50"}`}>{s.title}</button>)}</div></div>
          <label className="mt-6 block text-sm font-bold text-brand-900">Tell us about your project<textarea required rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${field} resize-y`} placeholder="A little about your idea, goals and timeline..." /></label>
          <button type="submit" className="mt-6 inline-flex items-center rounded-full bg-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-200 transition hover:bg-brand-800">Send enquiry</button>
          <p className="mt-3 text-xs text-slate-400">This opens your default email app with your enquiry prepared.</p>
        </form>
      </div>
    </section>
  );
}
