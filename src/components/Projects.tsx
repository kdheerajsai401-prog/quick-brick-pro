import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

interface Project {
  img: string;
  label: string;
  span?: string;
}

const PROJECTS: Project[] = [
  { img: '/assets/img/projects/96.jpeg', label: 'Foundation Waterproofing', span: 'sm:col-span-2 sm:row-span-2' },
  { img: '/assets/img/projects/11.jpg', label: 'Roof Installation' },
  { img: '/assets/img/projects/24.jpg', label: 'Masonry Restoration' },
  { img: '/assets/img/projects/39.jpeg', label: 'Crack Repair' },
  { img: '/assets/img/projects/18.jpg', label: 'Flat Roofing' },
  { img: '/assets/img/projects/77.jpeg', label: 'Structural Reinforcement', span: 'sm:col-span-2' },
  { img: '/assets/img/projects/50.jpeg', label: 'Roof Repair' },
  { img: '/assets/img/projects/61.jpeg', label: 'Brick Restoration' },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-navy py-20 sm:py-28 lg:py-32">
      <div className="px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end lg:mb-16">
          <h2 className="font-podium text-[clamp(2rem,5vw,3.75rem)] uppercase leading-[0.95] tracking-tight text-white">
            Recent work
            <br />
            across Toronto.
          </h2>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Start your project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 sm:gap-4">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.img}
              delay={i * 60}
              className={`group relative overflow-hidden rounded-xl ${project.span ?? ''}`}
            >
              <img
                src={project.img}
                alt={project.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <span className="absolute bottom-4 left-4 font-inter text-[11px] uppercase tracking-widest text-white sm:text-xs">
                {project.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
