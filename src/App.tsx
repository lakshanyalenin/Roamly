import { useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Destinations from '@/components/Destinations';
import TripPlanner from '@/components/TripPlanner';
import BudgetCalculator from '@/components/BudgetCalculator';
import TravelStories from '@/components/TravelStories';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-base)' }}>
        <Navbar />
        <main>
          <Hero onSearch={setSearchQuery} />
          <About />
          <Destinations searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <TripPlanner />
          <BudgetCalculator />
          <TravelStories />
          <Services />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
