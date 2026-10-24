import { Compass, Map, Calculator, Gem } from 'lucide-react';
import { services } from '@/data/destinations';

const iconMap = {
  compass: Compass,
  map: Map,
  calculator: Calculator,
  gem: Gem,
};

export default function Services() {
  return (
    <section id="services" className="section-pad bg-midnight-800 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-sky-400/8 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-sky-400/5 blur-3xl" />

      <div className="container-page relative z-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="pill bg-sky-400/15 text-sky-400 mb-4 border border-sky-400/20">
            <Compass className="w-3.5 h-3.5" />
            Our Services
          </span>
          <h2 className="section-title mb-4">
            Everything you need to travel well
          </h2>
          <p className="section-subtitle mx-auto">
            Four focused tools that take you from dreaming about a trip to stepping off the plane.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group p-6 rounded-3xl bg-slate-50/50 border border-slate-400/50 hover:bg-slate-50 hover:border-sky-400/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-400/15 flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-400 group-hover:text-midnight-900 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-50 mb-2 font-display">{service.title}</h3>
                <p className="text-sm text-muted-200 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
