import { Compass, Wallet, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Compass,
    title: 'Explore Freely',
    description: 'Browse a curated world of destinations without pressure, paywalls, or booking traps. Travel should start with curiosity, not a credit card.',
  },
  {
    icon: Wallet,
    title: 'Travel Smart',
    description: 'Transparent cost estimates in rupees, realistic day-by-day itineraries, and practical local tips that save you money before you even land.',
  },
  {
    icon: Sparkles,
    title: 'Discover More',
    description: 'Every destination comes with hidden gems and local knowledge—the places that don\'t make the guidebooks but make the trip unforgettable.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <span className="pill mb-5 bg-accent-soft-c text-accent-c">
              <Compass className="w-3.5 h-3.5" />
              About Roamly
            </span>
            <h2 className="section-title mb-5">
              We make travel planning feel like the journey itself.
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-fg-secondary">
              Roamly is a travel companion built for explorers who want depth without clutter. We bring destinations to life with rich photography, honest budgets, and the kind of local knowledge you usually only get from a friend who's been there.
            </p>
            <p className="leading-relaxed text-fg-muted">
              No paid placements, no fake "best price" claims—just clear, useful planning tools and stories from real travellers. Whether it's a weekend in Goa or a fortnight in Switzerland, we help you plan it well.
            </p>
          </div>

          {/* Right: Values cards */}
          <div className="space-y-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="card p-6 flex gap-5 items-start hover:shadow-lg hover:-translate-y-0.5"
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--accent)' }}
                >
                  <v.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1.5 text-fg-primary">{v.title}</h3>
                  <p className="leading-relaxed text-fg-muted">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
