import { Star } from 'lucide-react';
import Reveal from './Reveal';

const REVIEWS = [
  {
    initials: 'MT',
    name: 'Michael T.',
    location: 'Toronto Homeowner',
    quote:
      'Quick Brick repaired our foundation cracks and waterproofed the basement. Professional, on time, and they explained every step. No more water issues.',
  },
  {
    initials: 'SK',
    name: 'Sandra K.',
    location: 'Scarborough Homeowner',
    quote:
      'Emergency roof leak after a storm. They responded the same evening, tarped it, and finished the full repair within days. Honest pricing, great work.',
  },
  {
    initials: 'DR',
    name: 'David R.',
    location: 'Property Manager, North York',
    quote:
      'Full roof replacement and masonry restoration on our commercial building. Experienced crew, cleaned up daily, and finished ahead of schedule.',
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-12 max-w-2xl lg:mb-16">
          <h2 className="font-podium text-[clamp(2rem,5vw,3.75rem)] uppercase leading-[0.95] tracking-tight text-navy">
            What Toronto
            <br />
            says about us.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-[#f5f7fb] p-7">
                <div className="mb-4 flex gap-1 text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mb-6 flex-1 font-inter text-[15px] leading-relaxed text-slate-700">
                  {review.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-podium text-sm font-bold text-white">
                    {review.initials}
                  </span>
                  <span>
                    <span className="block font-inter text-sm font-semibold text-navy">
                      {review.name}
                    </span>
                    <span className="block font-inter text-xs text-slate-500">
                      {review.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
