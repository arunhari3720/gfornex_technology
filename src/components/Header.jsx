import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LOGO_FULL } from "../data";

export function Brand() {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="Fornex IT Solutions">
      <img src={LOGO_FULL} alt="Fornex IT Solutions" className="h-9 w-auto" />
    </Link>
  );
}

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Process", "/process"],
  ["Portfolio", "/portfolio"],
  ["FAQ", "/faq"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive ? "text-white" : "text-brand-100/75 hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-950/90 backdrop-blur-xl">
      <div className="container-width flex h-[76px] items-center justify-between">
        <Brand />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {nav.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `rounded-full px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-900/40 transition hover:bg-brand-400 ${
                isActive ? "bg-brand-400" : "bg-brand-500"
              }`
            }
          >
            Let’s talk
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-xl border border-white/30 px-3 py-2 text-sm font-bold text-white lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav className="container-width flex flex-col gap-1 border-t border-white/10 pb-5 pt-3 lg:hidden" aria-label="Mobile navigation">
          {[...nav, ["Contact", "/contact"]].map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-brand-100 hover:bg-white/10"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
