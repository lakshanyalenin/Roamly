import { useState } from 'react';
import { Compass, Mail, Instagram, Twitter, Facebook, Youtube, ArrowRight, Check } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Trip Planner', href: '#planner' },
  { label: 'Budget', href: '#budget' },
  { label: 'Stories', href: '#stories' },
  { label: 'Services', href: '#services' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3500);
  };

  return (
    <footer className="bg-midnight-900 text-slate-50 pt-20 pb-8 border-t border-slate-400/30">
      <div className="container-page">
        {/* Newsletter band */}
        <div className="rounded-4xl bg-gradient-to-br from-sky-500/20 to-slate-50 border border-sky-400/20 p-8 lg:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-50 mb-2">
              Get travel inspiration in your inbox
            </h3>
            <p className="text-muted-200 max-w-md">
              New destinations, hidden gems, and budget tips — once a month, no spam.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 lg:min-w-[380px] relative">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-300" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus('idle');
                }}
                placeholder="you@example.com"
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-midnight-50 text-slate-50 placeholder:text-muted-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 border border-slate-400"
                aria-label="Email address"
              />
            </div>
            <button type="submit" className="btn-primary justify-center whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
            {status === 'success' && (
              <p className="absolute -bottom-7 right-0 text-sm text-sky-300 flex items-center gap-1.5">
                <Check className="w-4 h-4" /> You're subscribed!
              </p>
            )}
            {status === 'error' && (
              <p className="absolute -bottom-7 right-0 text-sm text-gold-400">
                Please enter a valid email address.
              </p>
            )}
          </form>
        </div>

        {/* Main footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-400 text-midnight-900">
                <Compass className="w-5 h-5" />
              </span>
              <span className="font-display text-2xl font-bold text-slate-50">Roamly</span>
            </a>
            <p className="text-muted-200 leading-relaxed max-w-sm mb-5">
              Your travel explorer — discover destinations, plan itineraries, estimate budgets, and find the hidden gems that make a trip unforgettable.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-muted-200 hover:bg-sky-400 hover:text-midnight-900 transition-all hover:-translate-y-0.5"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-50 uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-200 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-slate-50 uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-muted-200">
                <Mail className="w-4 h-4 text-sky-400" />
                hello@roamly.travel
              </li>
              <li className="text-sm text-muted-200 leading-relaxed">
                Have a travel story to share or a destination suggestion? We'd love to hear from you.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-300">
            © {new Date().getFullYear()} Roamly — Travel Explorer. All rights reserved.
          </p>
          <p className="text-sm text-muted-300">
            Built with curiosity for travellers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
