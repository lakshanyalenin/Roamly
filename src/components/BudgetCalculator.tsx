import { useState } from 'react';
import { Calculator, Train, BedDouble, UtensilsCrossed, Mountain, Users, CalendarDays, Wallet } from 'lucide-react';
import { calculateBudget, formatINR, type BudgetInputs } from '@/data/destinations';

const defaultInputs: BudgetInputs = {
  travellers: 2,
  days: 5,
  transport: 20000,
  accommodation: 25000,
  food: 12000,
  activities: 15000,
};

const catConfig = [
  { key: 'transport' as const, label: 'Transport', icon: Train, desc: 'Flights, trains, cabs, fuel' },
  { key: 'accommodation' as const, label: 'Accommodation', icon: BedDouble, desc: 'Hotels, hostels, homestays' },
  { key: 'food' as const, label: 'Food & Drink', icon: UtensilsCrossed, desc: 'Meals, snacks, drinks' },
  { key: 'activities' as const, label: 'Activities', icon: Mountain, desc: 'Tours, tickets, experiences' },
];

export default function BudgetCalculator() {
  const [inputs, setInputs] = useState<BudgetInputs>(defaultInputs);
  const result = calculateBudget(inputs);

  const update = (key: keyof BudgetInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: Math.max(0, value) }));
  };

  const totalPercent = result.total > 0 ? 100 : 0;
  const categoryPercent = (val: number) => (result.total > 0 ? (val / result.total) * 100 : 0);

  // Rotate bar colors so they're distinguishable
  const barColors = ['var(--accent)', 'var(--accent-soft)', 'var(--gold)', 'var(--fg-muted)'];

  return (
    <section id="budget" className="section-pad" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container-page">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="pill mb-4 bg-accent-soft-c text-accent-c">
            <Calculator className="w-3.5 h-3.5" />
            Budget Calculator
          </span>
          <h2 className="section-title mb-4">Know your costs before you go</h2>
          <p className="section-subtitle mx-auto">
            Enter your expected spending per category and we'll calculate total and per-person costs in rupees.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="card p-6 lg:p-7">
            <h3 className="text-xl font-bold mb-5 text-fg-primary">Trip Parameters</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="label-text flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-accent-c" /> Travellers
                </label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={inputs.travellers}
                  onChange={(e) => update('travellers', Number(e.target.value))}
                  className="input-field"
                />
              </div>
              <div>
                <label className="label-text flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4 text-accent-c" /> Days
                </label>
                <input
                  type="number"
                  min={1}
                  max={90}
                  value={inputs.days}
                  onChange={(e) => update('days', Number(e.target.value))}
                  className="input-field"
                />
              </div>
            </div>

            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-fg-secondary">Category Costs (₹)</h4>

            <div className="space-y-5">
              {catConfig.map((cat, idx) => (
                <div key={cat.key}>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-fg-primary">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: 'var(--accent-bg)' }}
                      >
                        <cat.icon className="w-4 h-4 text-accent-c" />
                      </span>
                      {cat.label}
                    </label>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-fg-muted">₹</span>
                      <input
                        type="number"
                        min={0}
                        value={inputs[cat.key]}
                        onChange={(e) => update(cat.key, Number(e.target.value))}
                        className="w-28 px-3 py-2 rounded-lg text-right font-semibold transition-all"
                        style={{
                          border: '1px solid var(--border-color)',
                          backgroundColor: 'var(--bg-input)',
                          color: 'var(--fg-primary)',
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-xs mb-2 pl-10 text-fg-muted">{cat.desc}</p>
                  <div
                    className="h-2 rounded-full overflow-hidden ml-10"
                    style={{ backgroundColor: 'var(--bg-hover)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${categoryPercent(inputs[cat.key])}%`,
                        backgroundColor: barColors[idx],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-6">
            {/* Total card */}
            <div
              className="card p-6 lg:p-8"
              style={{ background: 'linear-gradient(to bottom right, var(--accent-bg), var(--bg-card))', borderColor: 'var(--accent)' }}
            >
              <p className="text-sm uppercase tracking-widest mb-2 text-accent-c">Estimated Total Trip Cost</p>
              <p className="font-display text-5xl font-bold mb-1 text-gold-c">{formatINR(result.total)}</p>
              <p className="text-sm text-fg-secondary">
                for {inputs.travellers} {inputs.travellers === 1 ? 'traveller' : 'travellers'} over {inputs.days} {inputs.days === 1 ? 'day' : 'days'}
              </p>

              <div className="mt-6 pt-6 grid grid-cols-2 gap-4" style={{ borderTop: '1px solid var(--border-soft)' }}>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1 text-fg-muted">Per Person</p>
                  <p className="font-display text-2xl font-bold text-accent-c">{formatINR(result.perPerson)}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1 text-fg-muted">Per Day</p>
                  <p className="font-display text-2xl font-bold text-accent-c">
                    {formatINR(Math.round(result.total / Math.max(1, inputs.days)))}
                  </p>
                </div>
              </div>
            </div>

            {/* Category breakdown */}
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-fg-primary">
                <Wallet className="w-5 h-5 text-accent-c" />
                Cost Breakdown
              </h3>
              <div className="space-y-3">
                {catConfig.map((cat, idx) => (
                  <div
                    key={cat.key}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-hover)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <span className="flex items-center gap-3 text-sm font-medium text-fg-secondary">
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: 'var(--accent-bg)' }}
                      >
                        <cat.icon className="w-3.5 h-3.5 text-accent-c" />
                      </span>
                      {cat.label}
                    </span>
                    <div className="text-right">
                      <p className="font-semibold text-fg-primary">{formatINR(inputs[cat.key])}</p>
                      <p className="text-xs text-fg-muted">{categoryPercent(inputs[cat.key]).toFixed(0)}% of total</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border-soft)' }}>
                <span className="font-bold text-fg-primary">Total</span>
                <span className="font-display text-2xl font-bold text-gold-c">{formatINR(result.total)}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="card p-5">
              <div className="flex items-center gap-1 mb-3 text-xs font-semibold text-fg-secondary">
                <span className="uppercase tracking-wider">Cost Distribution</span>
                <span className="ml-auto">{totalPercent}%</span>
              </div>
              <div className="h-4 rounded-full overflow-hidden flex" style={{ backgroundColor: 'var(--bg-hover)' }}>
                {catConfig.map((cat, idx) => (
                  <div
                    key={cat.key}
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${categoryPercent(inputs[cat.key])}%`,
                      backgroundColor: barColors[idx],
                    }}
                    title={`${cat.label}: ${formatINR(inputs[cat.key])}`}
                  />
                ))}
              </div>
              <p className="text-xs mt-3 text-fg-muted">
                These are estimates based on your inputs. Actual costs vary by season, availability, and exchange rates. Always budget a 10–15% buffer for surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
