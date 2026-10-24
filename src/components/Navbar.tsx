import { useEffect, useState } from 'react';
import { Menu, X, Compass, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Trip Planner', href: '#planner' },
  { label: 'Budget', href: '#budget' },
  { label: 'Stories', href: '#stories' },
  { label: 'Services', href: '#services' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  const ThemeButton = ({ className = '' }: { className?: string }) => (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${className}`}
      style={{
        borderColor: 'var(--border-color)',
        backgroundColor: 'var(--bg-card)',
        color: 'var(--fg-secondary)',
      }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <Sun className="w-5 h-5 text-gold-c" /> : <Moon className="w-5 h-5 text-accent-c" />}
    </button>
  );

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--bg-base)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-soft)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <nav className="container-page flex items-center justify-between py-3.5">
        <a href="#home" className="flex items-center gap-2.5 group" onClick={close}>
          <span
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-fg)' }}
          >
            <Compass className="w-5 h-5" />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight text-fg-primary">
            Roamly
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="btn-ghost text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeButton />
          <a href="#planner" className="btn-primary text-sm py-2.5 px-5">
            Start Planning
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeButton />
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg transition-colors"
            style={{ color: 'var(--accent)' }}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="lg:hidden absolute top-full inset-x-0 animate-slide-down"
          style={{
            backgroundColor: 'var(--bg-base)',
            borderTop: '1px solid var(--border-soft)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          }}
        >
          <ul className="container-page py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block px-4 py-3 rounded-xl font-medium transition-colors"
                  style={{ color: 'var(--fg-secondary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-bg)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--fg-secondary)';
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#planner" onClick={close} className="btn-primary w-full">
                Start Planning
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
