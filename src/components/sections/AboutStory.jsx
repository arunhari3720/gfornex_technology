import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionHeading } from "../Shared";


function Word({ w, i, n, p }) {
  const o = useTransform(p, [i / n, (i + 1) / n], [0.15, 1]);
  return <motion.span style={{ opacity: o }} className="mr-[.28em] inline-block">{w}</motion.span>;
}

function StoryScroll() {
  const ref = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const words = "Great businesses deserve technology that keeps up. We design, build and support the websites, apps and systems that help customers find you, trust you and take the next step.".split(" ");
  return (
    <section ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 grid h-screen place-items-center">
        <p className="container-width max-w-4xl font-heading text-3xl font-bold leading-snug tracking-tight text-brand-900 sm:text-5xl">
          {words.map((w, i) => <Word key={i} w={w} i={i} n={words.length} p={p} />)}
        </p>
      </div>
    </section>
  );
}

/* 3. Container scroll: dashboard tilts flat as it arrives */


function TiltDashboard() {
  const ref = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(p, [0, 1], [24, 0]);
  const scale = useTransform(p, [0, 1], [0.88, 1]);
  return (
    <section className="bg-brand-50/70 py-24 sm:py-28">
      <div className="container-width">
        <SectionHeading eyebrow="What you get" title="Everything your business needs online, in one place." center />
        <div ref={ref} style={{ perspective: 1200 }}>
          <motion.div style={{ rotateX, scale }} className="mx-auto max-w-4xl rounded-[2rem] border border-brand-200 bg-brand-900 p-3 shadow-2xl shadow-brand-300 sm:p-5">
            <div className="rounded-2xl bg-white p-5 sm:p-8">
              <div className="mb-5 flex items-center justify-between"><div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-brand-200" /><i className="h-2.5 w-2.5 rounded-full bg-brand-300" /><i className="h-2.5 w-2.5 rounded-full bg-brand-400" /></div><span className="text-xs font-bold text-brand-500">Business overview</span></div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[["Search visibility", "Growing"], ["Site performance", "Optimised"], ["Enquiries", "Rising"]].map(([a, b]) => <div key={a} className="rounded-xl bg-brand-50 p-4"><p className="text-xs text-slate-500">{a}</p><p className="mt-1 font-heading text-2xl font-bold">{b}</p></div>)}
              </div>
              <div className="mt-3 rounded-xl border border-brand-100 p-4">
                <div className="mb-4 flex items-center justify-between"><span className="text-sm font-bold">Digital growth</span><span className="rounded-full bg-brand-100 px-2 py-1 text-[10px] font-bold text-brand-700">Illustrative</span></div>
                <div className="flex h-32 items-end gap-2">{[28, 40, 35, 57, 48, 70, 64, 88, 78, 100].map((h, i) => <div key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.18}s` }} className="live-bar flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-300" />)}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* 4. Works wheel: services rotate around a wheel as you scroll */

export default function AboutStory() {
  return <><StoryScroll /><TiltDashboard /></>;
}
