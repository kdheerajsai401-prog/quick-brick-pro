import { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

const NAV_LINKS = ['Services', 'Projects', 'About', 'Contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-navy/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-6">
          <a
            href="#top"
            className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
          >
            Quick Brick
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-inter text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-colors hover:border-white/60 hover:bg-white/10 md:inline-flex"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-end space-y-1.5 md:hidden"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-4 bg-white" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-navy/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
          <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
            Quick Brick
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="text-white"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <div className="flex h-[calc(100%-5rem)] flex-col items-center justify-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-podium text-4xl uppercase text-white transition-all duration-500 sm:text-5xl"
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 border border-white/30 px-8 py-4 font-inter text-xs uppercase tracking-widest text-white transition-all duration-500 hover:bg-white/10"
            style={{
              transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
