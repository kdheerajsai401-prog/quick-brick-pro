import { Check } from 'lucide-react';
import Reveal from './Reveal';

const FOUNDATION = [
  'Basement Waterproofing',
  'Foundation Crack Repair',
  'Inspection & Assessment',
  'Leveling & Lifting',
  'Slab & Crawl Space Repair',
  'Structural Reinforcement',
  'Waterproof Coatings & Sealants',
  'Emergency Foundation Services',
];

const ROOFING = [
  'Roof Installation & Replacement',
  'Roof Repair & Inspection',
  'Flat & Metal Roofing',
  'Shingle Roofing Services',
  'Waterproofing & Coatings',
  'Gutter & Drainage Solutions',
  'Masonry Restoration & Repair',
  'Emergency Roof Services',
];

function Pillar({
  kicker,
  title,
  copy,
  items,
  image,
}: {
  kicker: string;
  title: string;
  copy: string;
  items: string[];
  image: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
        <div className="absolute bottom-4 left-5">
          <span className="font-inter text-[11px] uppercase tracking-[0.25em] text-white/80">
            {kicker}
          </span>
          <h3 className="font-podium text-3xl uppercase tracking-tight text-white sm:text-4xl">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <p className="mb-6 font-inter text-sm leading-relaxed text-slate-600">{copy}</p>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
              </span>
              <span className="font-inter text-[13px] text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#f5f7fb] py-20 sm:py-28 lg:py-32">
      <div className="px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-12 max-w-2xl lg:mb-16">
          <h2 className="font-podium text-[clamp(2rem,5vw,3.75rem)] uppercase leading-[0.95] tracking-tight text-navy">
            Foundation and roofing,
            <br />
            done right.
          </h2>
          <p className="mt-5 max-w-xl font-inter text-base leading-relaxed text-slate-600">
            Two specialties under one roof. Whether your basement is taking on
            water or your shingles are past their prime, the same crew handles it
            start to finish, residential and commercial.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <Pillar
              kicker="Below the ground"
              title="Foundation"
              copy="Cracks, leaks, settling, and structural movement, fixed properly so they stay fixed. Honest assessments and durable, warrantied repairs."
              items={FOUNDATION}
              image="/assets/img/hero/foundation-2.jpg"
            />
          </Reveal>
          <Reveal delay={120}>
            <Pillar
              kicker="Over your head"
              title="Roofing"
              copy="Installation, repair, and emergency response for shingle, flat, and metal roofs. Built to shed Toronto rain and snow for decades."
              items={ROOFING}
              image="/assets/img/hero/roofing-2.jpg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
