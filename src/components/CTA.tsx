import { ArrowUpRight, Phone } from 'lucide-react';
import Reveal from './Reveal';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-20 sm:py-28 lg:py-32">
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div className="relative px-6 sm:px-10 lg:px-16">
        <Reveal className="max-w-3xl">
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-white/60">
            24/7 Emergency Response
          </span>
          <h2 className="mt-4 font-podium text-[clamp(2.2rem,6vw,5rem)] uppercase leading-[0.95] tracking-tight text-white">
            Secure your property.
            <br />
            Get a free estimate.
          </h2>
          <p className="mt-6 max-w-lg font-inter text-base leading-relaxed text-white/70">
            Urgent foundation repair or a full roof replacement, our Toronto
            crew is ready. No pressure, no obligation, just a straight answer on
            what your property needs.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="tel:4373395285"
              className="group inline-flex items-center gap-2 bg-accent px-7 py-4 font-inter text-xs uppercase tracking-widest text-white transition-colors hover:bg-accent-dark"
            >
              <Phone className="h-4 w-4" />
              (437) 339-5285
            </a>
            <a
              href="tel:8666600155"
              className="group inline-flex items-center gap-2 border border-white/30 px-7 py-4 font-inter text-xs uppercase tracking-widest text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Emergency Line
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
