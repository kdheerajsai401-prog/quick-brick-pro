const ITEMS = [
  'Foundation Repair',
  'Basement Waterproofing',
  'Roof Installation',
  'Masonry Restoration',
  '24/7 Emergency Service',
  'Structural Reinforcement',
  'Flat & Metal Roofing',
  '30-Year Warranty',
];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-accent py-5" aria-hidden="true">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {ITEMS.map((item) => (
              <span key={item} className="flex items-center">
                <span className="px-6 font-inter text-sm font-medium uppercase tracking-widest text-white sm:px-8">
                  {item}
                </span>
                <span className="text-white/40">&#10022;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
