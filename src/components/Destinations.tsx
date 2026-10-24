import { useMemo, useState } from 'react';
import { Search, MapPin, Calendar, Wallet, Sparkles, Lightbulb, ChevronDown, X } from 'lucide-react';
import { destinations, formatINR, type DestinationCategory } from '@/data/destinations';

const categories: (DestinationCategory | 'All')[] = ['All', 'Beach', 'Mountains', 'City', 'Nature', 'Cultural'];

const featuredIds = ['bali', 'switzerland'];

interface DestinationsProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export default function Destinations({ searchQuery, setSearchQuery }: DestinationsProps) {
  const [activeCategory, setActiveCategory] = useState<DestinationCategory | 'All'>('All');
  const [expandedGem, setExpandedGem] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === 'All' || d.categories.includes(activeCategory as DestinationCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="destinations" className="section-pad" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="pill mb-4 bg-accent-soft-c text-accent-c">
            <MapPin className="w-3.5 h-3.5" />
            Destinations
          </span>
          <h2 className="section-title mb-4">Find your next unforgettable place</h2>
          <p className="section-subtitle mx-auto">
            From Himalayan peaks to tropical shores—each destination comes with hidden gems, local tips, and honest budget estimates.
          </p>
        </div>

        {/* Search + filters */}
        <div className="flex flex-col items-center gap-5 mb-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--fg-muted)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destinations…"
              className="w-full pl-12 pr-10 py-3.5 rounded-full transition-all"
              style={{
                backgroundColor: 'var(--bg-input)',
                border: '1px solid var(--border-color)',
                color: 'var(--fg-primary)',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors"
                style={{ color: 'var(--fg-muted)' }}
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200"
                style={
                  activeCategory === cat
                    ? {
                        backgroundColor: 'var(--accent)',
                        color: 'var(--accent-fg)',
                        boxShadow: '0 4px 12px var(--accent-bg)',
                      }
                    : {
                        backgroundColor: 'var(--bg-card)',
                        color: 'var(--fg-secondary)',
                        border: '1px solid var(--border-color)',
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-fg-muted">No destinations match your search. Try a different keyword or category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="btn-secondary mt-4"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest) => {
              const isFeatured = featuredIds.includes(dest.id);
              return (
                <article
                  key={dest.id}
                  className="card group hover:shadow-xl hover:-translate-y-1"
                  style={isFeatured ? { boxShadow: '0 0 0 1px var(--gold)' } : undefined}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                    {isFeatured && (
                      <span
                        className="pill absolute top-3 right-3"
                        style={{ backgroundColor: 'var(--gold)', color: '#0F172A' }}
                      >
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {dest.categories.map((cat) => (
                        <span
                          key={cat}
                          className="pill"
                          style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', color: 'var(--accent-soft)' }}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                      <h3 className="text-2xl font-bold font-display" style={{ color: '#F9FAFB' }}>{dest.name}</h3>
                      <p className="text-sm flex items-center gap-1" style={{ color: 'rgba(249, 250, 251, 0.7)' }}>
                        <MapPin className="w-3.5 h-3.5" />
                        {dest.country}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p className="leading-relaxed text-sm mb-4 text-fg-secondary">{dest.description}</p>

                    {/* Meta row */}
                    <div className="flex items-center gap-4 mb-4 text-xs">
                      <div className="flex items-center gap-1.5 text-fg-muted">
                        <Calendar className="w-3.5 h-3.5 text-accent-c" />
                        {dest.bestTimeToVisit}
                      </div>
                      <div className="flex items-center gap-1.5 text-fg-muted">
                        <Wallet className="w-3.5 h-3.5 text-accent-c" />
                        from {formatINR(dest.budgetPerPersonINR)}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <p className="text-xs font-bold uppercase tracking-wider mb-2 text-fg-secondary">Highlights</p>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-xs px-2.5 py-1 rounded-lg"
                            style={{
                              backgroundColor: 'var(--bg-hover)',
                              color: 'var(--fg-secondary)',
                              border: '1px solid var(--border-soft)',
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hidden gems */}
                    <div className="pt-4" style={{ borderTop: '1px solid var(--border-soft)' }}>
                      <button
                        onClick={() => setExpandedGem(expandedGem === dest.id ? null : dest.id)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span className="flex items-center gap-2 text-sm font-bold text-gold-c">
                          <Sparkles className="w-4 h-4" />
                          Hidden Gems & Local Tips
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-gold-c transition-transform ${expandedGem === dest.id ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {expandedGem === dest.id && (
                        <div className="mt-3 space-y-3 animate-slide-down">
                          {dest.hiddenGems.map((gem) => (
                            <div key={gem.name} className="flex gap-3 items-start">
                              <span
                                className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center mt-0.5 bg-gold-soft-c"
                                style={{ color: 'var(--gold)' }}
                              >
                                <Sparkles className="w-3 h-3" />
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-fg-primary">{gem.name}</p>
                                <p className="text-xs leading-relaxed text-fg-muted">{gem.description}</p>
                              </div>
                            </div>
                          ))}
                          <div
                            className="flex gap-3 items-start rounded-xl p-3"
                            style={{ backgroundColor: 'var(--accent-bg)' }}
                          >
                            <span
                              className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center mt-0.5"
                              style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--accent)' }}
                            >
                              <Lightbulb className="w-3 h-3" />
                            </span>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wide mb-0.5 text-accent-c">Local Tip</p>
                              <p className="text-sm leading-relaxed text-fg-secondary">{dest.localTip}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-fg-muted">
                            <span className="font-semibold text-fg-secondary">Temp:</span> {dest.temperature}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
