import { useState } from 'react';
import { Map, Calendar, Users, Compass, Clock, Sun, Moon } from 'lucide-react';
import { destinations, tripStyles, generateItinerary, formatINR } from '@/data/destinations';

export default function TripPlanner() {
  const [destinationId, setDestinationId] = useState(destinations[0].id);
  const [duration, setDuration] = useState(5);
  const [travellers, setTravellers] = useState(2);
  const [style, setStyle] = useState<string>('Comfortable');

  const destination = destinations.find((d) => d.id === destinationId)!;
  const itinerary = generateItinerary(destination, duration, style);
  const estimatedCost = destination.budgetPerPersonINR * travellers * (duration / 5);

  return (
    <section id="planner" className="section-pad" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="container-page">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="pill mb-4 bg-accent-soft-c text-accent-c">
            <Map className="w-3.5 h-3.5" />
            Trip Planner
          </span>
          <h2 className="section-title mb-4">Plan your journey, day by day</h2>
          <p className="section-subtitle mx-auto">
            Pick a destination, set your dates and travel style, and we'll generate a sample itinerary with activities for each day.
          </p>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-8">
          {/* Controls */}
          <div className="card p-6 lg:p-7 h-fit lg:sticky lg:top-24">
            <h3 className="text-xl font-bold mb-5 text-fg-primary">Trip Details</h3>

            <div className="space-y-5">
              <div>
                <label className="label-text flex items-center gap-1.5">
                  <Map className="w-4 h-4 text-accent-c" /> Destination
                </label>
                <select
                  value={destinationId}
                  onChange={(e) => setDestinationId(e.target.value)}
                  className="input-field appearance-none cursor-pointer"
                >
                  {destinations.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}, {d.country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label-text flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-accent-c" /> Duration (days)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={1}
                    max={14}
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="flex-1"
                    style={{ accentColor: 'var(--accent)' }}
                  />
                  <span
                    className="w-12 text-center font-bold rounded-lg py-1.5 text-sm"
                    style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--accent)' }}
                  >
                    {duration}d
                  </span>
                </div>
              </div>

              <div>
                <label className="label-text flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-accent-c" /> Travellers
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setTravellers((v) => Math.max(1, v - 1))}
                    className="w-10 h-10 rounded-lg font-bold transition-colors flex items-center justify-center"
                    style={{ backgroundColor: 'var(--bg-hover)', color: 'var(--fg-secondary)' }}
                    aria-label="Decrease travellers"
                  >
                    −
                  </button>
                  <span
                    className="flex-1 text-center font-bold rounded-lg py-2.5"
                    style={{ backgroundColor: 'var(--bg-input)', color: 'var(--fg-primary)', border: '1px solid var(--border-color)' }}
                  >
                    {travellers} {travellers === 1 ? 'person' : 'people'}
                  </span>
                  <button
                    onClick={() => setTravellers((v) => Math.min(10, v + 1))}
                    className="w-10 h-10 rounded-lg font-bold transition-colors flex items-center justify-center"
                    style={{ backgroundColor: 'var(--bg-hover)', color: 'var(--fg-secondary)' }}
                    aria-label="Increase travellers"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="label-text flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-accent-c" /> Travel Style
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {tripStyles.map((s) => (
                    <button
                      key={s}
                      onClick={() => setStyle(s)}
                      className="py-2.5 rounded-xl text-sm font-semibold transition-all"
                      style={
                        style === s
                          ? {
                              backgroundColor: 'var(--accent)',
                              color: 'var(--accent-fg)',
                            }
                          : {
                              backgroundColor: 'var(--bg-input)',
                              color: 'var(--fg-secondary)',
                              border: '1px solid var(--border-color)',
                            }
                      }
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cost preview */}
            <div className="mt-6 pt-5" style={{ borderTop: '1px solid var(--border-soft)' }}>
              <div className="flex items-center justify-between">
                <span className="text-sm text-fg-muted">Estimated trip cost</span>
                <span className="text-sm text-fg-muted">{travellers} × {duration}d</span>
              </div>
              <p className="font-display text-3xl font-bold mt-1 text-gold-c">
                {formatINR(Math.round(estimatedCost))}
              </p>
              <p className="text-xs mt-1 text-fg-muted">
                ≈ {formatINR(Math.round(estimatedCost / travellers))} per person · estimate only
              </p>
              <a href="#budget" className="btn-secondary w-full mt-4 text-sm py-2.5">
                Detailed Budget Calculator
              </a>
            </div>
          </div>

          {/* Itinerary */}
          <div className="space-y-4">
            <div
              className="card p-5"
              style={{ background: 'linear-gradient(to right, var(--accent-bg), var(--bg-card))', borderColor: 'var(--accent)' }}
            >
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h3 className="text-xl font-bold font-display text-fg-primary">{destination.name} Itinerary</h3>
                  <p className="text-sm text-fg-secondary">
                    {duration} days · {travellers} {travellers === 1 ? 'traveller' : 'travellers'} · {style} style
                  </p>
                </div>
                <span
                  className="pill"
                  style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--accent)' }}
                >
                  <Compass className="w-3.5 h-3.5" />
                  Sample Plan
                </span>
              </div>
            </div>

            {itinerary.map((day) => (
              <div key={day.day} className="card p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-lg"
                    style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-fg)' }}
                  >
                    {day.day}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-fg-muted">Day {day.day}</p>
                    <h4 className="text-lg font-bold text-fg-primary">{day.title}</h4>
                  </div>
                </div>

                <ul className="space-y-2.5 pl-2">
                  {day.activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 flex items-center gap-1 text-xs font-semibold w-16 text-accent-c">
                        {act.time.includes('20') || act.time.includes('18') ? (
                          <Moon className="w-3 h-3" />
                        ) : (
                          <Sun className="w-3 h-3" />
                        )}
                        {act.time}
                      </span>
                      <span className="text-sm leading-relaxed text-fg-secondary">{act.activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
