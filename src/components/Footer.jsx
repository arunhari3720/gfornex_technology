import { Link } from "react-router-dom";
import { Brand } from "./Header";

const footerLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 py-10 text-white">
      <div className="container-width flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <Brand />
          <p className="mt-3 text-xs text-brand-200/65">
            Technology that moves your business forward.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">
          {footerLinks.map(([label, to]) => (
            <Link key={to} to={to} className="text-xs font-semibold text-brand-100/70 transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>

        <div className="text-xs text-brand-200/65">
          © {new Date().getFullYear()} Fornex. All rights reserved. Madurai, Tamil Nadu
        </div>
      </div>
    </footer>
  );
}
