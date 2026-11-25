import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="grid min-h-[75vh] place-items-center bg-brand-950 px-6 pt-24 text-center text-white">
      <div>
        <p className="text-sm font-bold tracking-[0.25em] text-brand-300">404 ERROR</p>
        <h1 className="mt-4 font-heading text-5xl font-extrabold">Page not found</h1>
        <p className="mt-4 text-brand-100/70">The page you’re looking for doesn’t exist or may have moved.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-brand-500 px-6 py-3 font-bold text-white transition hover:bg-brand-400">
          Back to home
        </Link>
      </div>
    </section>
  );
}
