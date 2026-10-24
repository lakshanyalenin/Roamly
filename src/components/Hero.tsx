import { Search, ArrowRight, MapPin, Star } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/39894311/pexels-photo-39894311.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Scenic mountain landscape"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--bg-base) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.15) 100%)',
            opacity: 0.92,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, var(--bg-base) 0%, transparent 50%, var(--bg-base) 100%)',
            opacity: 0.55,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-page pt-24 pb-16">
        <div className="max-w-2xl">
          <span
            className="pill mb-6 animate-fade-in"
            style={{
              backgroundColor: 'var(--accent-bg)',
              color: 'var(--accent-soft)',
              border: '1px solid var(--accent)',
            }}
          >
            <Star className="w-3 h-3" style={{ fill: 'var(--accent-soft)' }} />
            Your Travel Explorer
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-balance animate-fade-up" style={{ color: '#F9FAFB' }}>
            The World Is Yours
            <br />
            <span style={{ color: 'var(--accent-soft)' }}>to Explore.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-xl animate-fade-up" style={{ color: 'rgba(249, 250, 251, 0.85)', animationDelay: '0.15s' }}>
            Discover breathtaking destinations, uncover hidden gems, plan day-by-day itineraries, and estimate your trip costs — all in one place.
          </p>

          {/* Search bar */}
          <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem('query') as HTMLInputElement;
                onSearch(input.value);
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-lg"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--fg-muted)' }} />
                <input
                  name="query"
                  type="text"
                  placeholder="Search destinations — Bali, Kyoto, Goa…"
                  className="w-full pl-12 pr-4 py-4 rounded-full text-base"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--fg-primary)',
                    border: '1px solid var(--border-color)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                  }}
                />
              </div>
              <button type="submit" className="btn-primary justify-center sm:px-8">
                Search <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            <a href="#destinations" className="btn-primary">
              Explore Destinations <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#planner"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold border-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#F9FAFB',
                borderColor: 'rgba(255,255,255,0.25)',
              }}
            >
              Plan Your Trip
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {[
              { value: '5', label: 'Destinations' },
              { value: '12+', label: 'Hidden Gems' },
              { value: '100%', label: 'Local Tips' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="font-display text-3xl font-bold" style={{ color: 'var(--gold)' }}>{stat.value}</span>
                <span className="text-sm uppercase tracking-wider" style={{ color: 'rgba(249, 250, 251, 0.6)' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2" style={{ color: 'rgba(249, 250, 251, 0.4)' }}>
        <MapPin className="w-5 h-5 animate-bounce" />
        <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
      </div>
    </section>
  );
}
