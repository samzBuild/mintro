import { useState } from "react";
import Actions from "../components/Actions";
import Logo from "../components/Logo";
import SignIn from "../components/SignIn";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#works", label: "How it works" },
  { href: "#offers", label: "Offers" },
  { href: "#about", label: "About us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#FDF9F6]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-lg font-medium xl:gap-12">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-orange-500">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          <Actions />

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-lg p-2 transition-colors hover:bg-orange-100 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-orange-500 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-black/5 px-4 pb-6 pt-2 sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map(({ href, label }) => (
              <li key={href} className="border-b border-black/5">
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium hover:text-orange-500"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 sm:hidden">
            <SignIn text="Sign in" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;