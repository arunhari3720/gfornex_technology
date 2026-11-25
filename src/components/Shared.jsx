/**
 * Shared presentation components used across the Fornex pages.
 */
export function SectionHeading({
  eyebrow,
  title,
  desc,
  center = false,
  dark = false,
}) {
  return (
    <div className={`mb-10 sm:mb-14 ${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${
            dark ? "text-brand-300" : "text-brand-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-brand-900"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
            center ? "mx-auto" : ""
          } ${dark ? "text-brand-100/70" : "text-slate-600"}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

export function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="bg-brand-950 px-6 pb-16 pt-32 text-white sm:pb-20">
      <div className="container-width">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brand-300">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-100/70 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
