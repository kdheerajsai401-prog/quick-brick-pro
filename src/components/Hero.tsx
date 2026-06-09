import { ArrowUpRight, Award, ShieldCheck } from 'lucide-react';

const HERO_VIDEO = '/assets/video/hero.mp4';

const STATS = [
  { value: '5,000+', label: 'Satisfied Clients' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '30-Yr', label: 'Warranty' },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-navy">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Blue tint for brand cohesion + legibility scrims */}
      <div className="absolute inset-0 bg-navy/25 mix-blend-multiply" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/30 to-navy/85"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-30 flex min-h-[100svh] flex-col justify-center px-6 pb-16 pt-32 sm:px-10 sm:pt-36 lg:px-16 lg:pt-40">
        <div className="max-w-4xl">
          <div className="animate-fade-up mb-6 flex items-center gap-3 lg:mb-8">
            <ShieldCheck className="h-4 w-4 text-white/70" />
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
              Toronto Foundation &amp; Roofing Specialists
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 font-podium uppercase leading-[0.92] tracking-tight text-white">
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Protect.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Strengthen.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Endure.</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-md font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-8">
            We repair foundations and roofs built to outlast Toronto winters. No
            shortcuts, no surprises,{' '}
            <span className="font-semibold text-white">just work that holds.</span>
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-accent px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-accent-dark sm:px-7 sm:py-4 sm:text-xs"
            >
              See Our Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="hidden items-center gap-3 sm:flex">
              <Award className="h-8 w-8 text-white/50" />
              <div className="font-inter text-xs uppercase tracking-wider text-white/60">
                <div>Top-Rated</div>
                <div>Toronto Contractor</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 font-inter text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 z-30 hidden justify-center sm:flex">
        <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
      </div>
    </section>
  );
}
