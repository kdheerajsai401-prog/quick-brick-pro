import { Mail, MapPin, Phone } from 'lucide-react';

const LINKS = ['Services', 'Projects', 'About', 'Contact'];
const SERVICES = [
  'Foundation Repair',
  'Basement Waterproofing',
  'Roof Installation',
  'Masonry Restoration',
  'Emergency Services',
];

export default function Footer() {
  return (
    <footer className="bg-[#06111f] pt-16 pb-8">
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-10 border-b border-white/10 pb-12 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white">
              Quick Brick
            </span>
            <p className="mt-4 max-w-xs font-inter text-sm leading-relaxed text-white/50">
              Toronto's foundation and roofing specialists. Reliable service,
              durable materials, honest workmanship.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-inter text-xs uppercase tracking-widest text-white/40">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-inter text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-inter text-xs uppercase tracking-widest text-white/40">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service} className="font-inter text-sm text-white/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-inter text-xs uppercase tracking-widest text-white/40">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:4373395285"
                  className="flex items-center gap-2.5 font-inter text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  (437) 339-5285
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@quickbrickcontractors.ca"
                  className="flex items-center gap-2.5 font-inter text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  info@quickbrickcontractors.ca
                </a>
              </li>
              <li className="flex items-center gap-2.5 font-inter text-sm text-white/70">
                <MapPin className="h-4 w-4 text-accent" />
                351 King St E, Toronto
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 sm:flex-row">
          <p className="font-inter text-xs text-white/40">
            &copy; 2025 Quick Brick Foundation &amp; Roofing Specialists.
          </p>
          <p className="font-inter text-xs text-white/40">Available 24/7 across the GTA.</p>
        </div>
      </div>
    </footer>
  );
}
