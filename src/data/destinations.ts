export type DestinationCategory = 'Beach' | 'Mountains' | 'City' | 'Nature' | 'Cultural';

export interface HiddenGem {
  name: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  categories: DestinationCategory[];
  description: string;
  longDescription: string;
  budgetPerPersonINR: number;
  bestTimeToVisit: string;
  highlights: string[];
  hiddenGems: HiddenGem[];
  localTip: string;
  temperature: string;
}

export const destinations: Destination[] = [
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.pexels.com/photos/36593818/pexels-photo-36593818.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categories: ['Beach', 'Cultural', 'Nature'],
    description: 'Lush rice terraces, sacred temples, and world-class surf in the Island of the Gods.',
    longDescription:
      'Bali blends spiritual depth with tropical indulgence. From the emerald rice terraces of Ubud to the dramatic cliffs of Uluwatu, every corner pulses with colour, ceremony, and warmth.',
    budgetPerPersonINR: 45000,
    bestTimeToVisit: 'Apr–Oct (Dry Season)',
    highlights: ['Ubud Rice Terraces', 'Uluwatu Temple Sunset', 'Mount Batur Sunrise Trek', 'Seminyak Beach Clubs'],
    hiddenGems: [
      { name: 'Tukad Cepung Waterfall', description: 'A hidden cave waterfall with a beam of sunlight pouring through—best at midday.' },
      { name: 'Sidemen Valley', description: 'Rice paddies without the crowds, pure rural Bali at its quietest.' },
    ],
    localTip: 'Skip the scooter in Ubud traffic—hire a local driver for ₹800/day and see three times more.',
    temperature: '24–32°C',
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/35076911/pexels-photo-35076911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categories: ['City', 'Cultural', 'Nature'],
    description: 'Ancient temples, bamboo forests, and tea houses frozen in a quieter century.',
    longDescription:
      "Kyoto is Japan's cultural heartbeat—1,600 Buddhist temples, 400 Shinto shrines, and a meticulous cuisine refined over twelve centuries. The autumn colours are simply unmatched.",
    budgetPerPersonINR: 85000,
    bestTimeToVisit: 'Mar–May & Oct–Nov',
    highlights: ['Fushimi Inari Shrine', 'Arashiyama Bamboo Grove', 'Kiyomizu-dera Temple', 'Gion Geisha District'],
    hiddenGems: [
      { name: 'Ohara Village', description: 'Mountain temples and thatched-roof farms an hour north of the city crowds.' },
      { name: 'Kibune Shrine Lanterns', description: 'In summer, wooden platforms over the river light up with lanterns.' },
    ],
    localTip: 'A 10-minute walk from any major shrine usually shakes the crowds—arrive by 7am for silence.',
    temperature: '5–28°C',
  },
  {
    id: 'manali',
    name: 'Manali',
    country: 'India',
    image: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categories: ['Mountains', 'Nature', 'Cultural'],
    description: 'Himalayan gateway town with snow peaks, pine forests, and river valleys.',
    longDescription:
      "Manali sits at 2,050m in the Beas Valley—a base camp for trekkers, backpackers, and honeymooners alike. Old Manali's cedar cafés and Solang Valley's snowfields make it a year-round magnet.",
    budgetPerPersonINR: 18000,
    bestTimeToVisit: 'Oct–Jun',
    highlights: ['Solang Valley', 'Hadimba Temple', 'Old Manali Cafés', 'Rohtang Pass'],
    hiddenGems: [
      { name: 'Jogini Falls', description: 'A 45-minute forest trek from Old Manali to a 150ft cascade.' },
      { name: 'Naggar Village', description: 'An ancient castle, art gallery, and views few travellers reach.' },
    ],
    localTip: 'Board a local HRTC bus to Solang for ₹50 instead of private cabs charging ₹2,000+.',
    temperature: '−5–25°C',
  },
  {
    id: 'goa',
    name: 'Goa',
    country: 'India',
    image: 'https://images.pexels.com/photos/4428274/pexels-photo-4428274.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categories: ['Beach', 'Cultural', 'City'],
    description: "Portuguese-era churches, palm-lined beaches, and India's best seafood.",
    longDescription:
      "Goa's 100km coastline hides everything from party beaches to silent coves. Beyond the sand, whitewashed churches, spice plantations, and a creative food scene make it far more than a beach destination.",
    budgetPerPersonINR: 12000,
    bestTimeToVisit: 'Nov–Feb',
    highlights: ['Baga & Anjuna Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls', 'Fort Aguada'],
    hiddenGems: [
      { name: 'Butterfly Beach', description: 'A crescent cove reachable only by boat—dolphins at sunrise.' },
      { name: 'Divar Island', description: 'Ferry across for sleepy Portuguese villas and zero nightlife.' },
    ],
    localTip: 'Rent a scooter for ₹300/day and ride the backroads—South Goa beaches are half the crowd.',
    temperature: '20–35°C',
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Europe',
    image: 'https://images.pexels.com/photos/21041270/pexels-photo-21041270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categories: ['Mountains', 'Nature', 'City'],
    description: 'Alpine peaks, glacier lakes, and storybook villages connected by scenic rail.',
    longDescription:
      'Switzerland delivers the most efficient travel infrastructure on Earth—trains, boats, and cable cars stitch together a postcard landscape of snowfields, waterfalls, and medieval lakeside towns.',
    budgetPerPersonINR: 150000,
    bestTimeToVisit: 'Jun–Sep & Dec–Mar',
    highlights: ['Jungfrau Railway', 'Lake Lucerne', 'Lauterbrunnen Valley', 'Interlaken'],
    hiddenGems: [
      { name: 'Bergün Village', description: 'An Engadin village with no through-road—undisturbed chalet charm.' },
      { name: 'Oeschinensee', description: 'A turquoise alpine lake reached by a gondola and 20-minute forest walk.' },
    ],
    localTip: 'A Swiss Travel Pass covers nearly all trains and cable cars—buy before you land to save 30%.',
    temperature: '−2–25°C',
  },
];

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export const stories: Story[] = [
  {
    id: 'budget-travel',
    title: 'How I Traveled Through Southeast Asia on ₹1,200 a Day',
    excerpt:
      "A backpacker's honest breakdown of daily costs across Vietnam, Laos, and Cambodia—with the exact prices for food, transport, and stays.",
    content: [
      "The biggest myth in travel is that you need a fortune. After 48 days across Vietnam, Laos, and Cambodia, my average spend was ₹1,207 per day—everything included.",
      "The trick starts with food. A bowl of pho in Hanoi costs ₹80. A night bus from Da Nang to Hanoi: ₹450. Hostel dorms average ₹300–500. When you spend local, the region does the heavy lifting.",
      "The second secret is slow travel. Staying four nights in one town instead of two halves your transport cost and deepends every experience. The cheapest travellers are always the slowest ones.",
    ],
    image: 'https://images.pexels.com/photos/9159958/pexels-photo-9159958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Aisha Mehra',
    date: 'Sep 12, 2025',
    readTime: '6 min read',
    category: 'Budget Travel',
  },
  {
    id: 'local-food',
    title: 'Eat Like a Local: Street Food Trails Across India',
    excerpt:
      "From Amritsari chole to Hyderabad biryani, a food lover's map of the best roadside stalls that locals actually eat at.",
    content: [
      "The real India is served on the street. Not the hotel buffet, not the curated 'food tour'—but the cart with a line of locals that has wrapped around the same corner for 30 years.",
      "In Amritsar, the golden triangle of Kesar da Dhaba, Bhaiyan da Dhaba, and the Guru Bazaar chole-wala gives you the full Punjabi spectrum for under ₹200.",
      "In Hyderabad, the biryani debate ends at Paradise and Hotel Shadab—but the real move is the 6am haleem at Pista House during Ramadan.",
    ],
    image: 'https://images.pexels.com/photos/36243530/pexels-photo-36243530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Rohan Kapoor',
    date: 'Aug 28, 2025',
    readTime: '5 min read',
    category: 'Local Food',
  },
  {
    id: 'hidden-destinations',
    title: 'Beyond the Map: 7 Hidden Destinations Worth the Detour',
    excerpt:
      "These barely-known places didn't make your Instagram feed—but they'll stay in your memory far longer than the famous ones.",
    content: [
      "The best places are the ones nobody told you about. After a year of chasing the unfamous, here are the seven that rewired my sense of what travel can be.",
      "Mawlynnong in Meghalaya is Asia's cleanest village—bamboo dustbins on every path, living root bridges, and a sky-walk over the Bangladesh border.",
      "In Bhutan's Haa Valley, the road ends at a yak herder's stone hut. No Wi-Fi, no shops—just a valley so quiet you can hear a single prayer flag flutter.",
    ],
    image: 'https://images.pexels.com/photos/12317380/pexels-photo-12317380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Tara Singh',
    date: 'Oct 5, 2025',
    readTime: '7 min read',
    category: 'Hidden Gems',
  },
];

export interface ServiceItem {
  icon: 'compass' | 'map' | 'calculator' | 'gem';
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    icon: 'compass',
    title: 'Destination Discovery',
    description: 'Browse curated destinations with rich photography, climate, and timing info to find your next trip.',
  },
  {
    icon: 'map',
    title: 'Personalised Itinerary Planning',
    description: 'Tell us your style and dates—we generate a day-by-day plan with activities tailored to you.',
  },
  {
    icon: 'calculator',
    title: 'Budget Estimation',
    description: 'Transparent, itemised cost estimates in rupees so you know what a trip will cost before you book.',
  },
  {
    icon: 'gem',
    title: 'Hidden-Gem Recommendations',
    description: "Local tips and off-the-map spots that don't show up in the usual guides—hand-curated by travellers.",
  },
];

export const tripStyles = [
  'Backpacker',
  'Budget',
  'Comfortable',
  'Luxury',
] as const;

export interface ItineraryDay {
  day: number;
  title: string;
  activities: { time: string; activity: string }[];
}

export function generateItinerary(destination: Destination, days: number, style: string): ItineraryDay[] {
  const baseActivities = [
    { time: '08:00', activity: 'Breakfast at a local café' },
    { time: '10:00', activity: `Guided exploration of ${destination.highlights[0]}` },
    { time: '13:00', activity: 'Lunch at a neighbourhood eatery' },
    { time: '15:00', activity: `Visit ${destination.highlights[1] ?? 'a local landmark'}` },
    { time: '18:00', activity: 'Sunset viewpoint & photography' },
    { time: '20:00', activity: 'Dinner & cultural evening' },
  ];

  const adventureActivities = [
    { time: '08:00', activity: 'Early start with packed breakfast' },
    { time: '09:00', activity: `Trek / outdoor activity near ${destination.highlights[0]}` },
    { time: '13:00', activity: 'Trail-side lunch' },
    { time: '15:00', activity: `Discover ${destination.hiddenGems[0]?.name ?? 'a hidden spot'}` },
    { time: '18:00', activity: 'Return & relax' },
    { time: '20:00', activity: 'Local food tasting' },
  ];

  const restActivities = [
    { time: '09:00', activity: 'Slow breakfast at the hotel' },
    { time: '11:00', activity: `Leisurely walk through ${destination.highlights[1] ?? 'the old town'}` },
    { time: '13:00', activity: 'Long lunch with local specialities' },
    { time: '16:00', activity: 'Spa / rest time' },
    { time: '19:00', activity: 'Fine dining dinner' },
  ];

  const activitySet = style === 'Backpacker' || style === 'Budget'
    ? adventureActivities
    : style === 'Luxury'
      ? restActivities
      : baseActivities;

  return Array.from({ length: days }, (_, i) => {
    const rotation = i % 3;
    const title =
      rotation === 0
        ? `${destination.name} Highlights`
        : rotation === 1
          ? `Hidden Gems of ${destination.name}`
          : `Local Culture & Food`;
    const shuffled = [...activitySet];
    if (rotation === 1 && destination.hiddenGems[i % destination.hiddenGems.length]) {
      shuffled[3] = {
        time: '15:00',
        activity: `Explore ${destination.hiddenGems[i % destination.hiddenGems.length].name}`,
      };
    }
    if (rotation === 2) {
      shuffled[5] = { time: '20:00', activity: 'Street-food crawl & local market' };
    }
    return { day: i + 1, title, activities: shuffled };
  });
}

export interface BudgetInputs {
  travellers: number;
  days: number;
  transport: number;
  accommodation: number;
  food: number;
  activities: number;
}

export function calculateBudget(inputs: BudgetInputs) {
  const total =
    inputs.transport + inputs.accommodation + inputs.food + inputs.activities;
  const perPerson = inputs.travellers > 0 ? Math.round(total / inputs.travellers) : 0;
  return {
    transport: inputs.transport,
    accommodation: inputs.accommodation,
    food: inputs.food,
    activities: inputs.activities,
    total,
    perPerson,
  };
}

export function formatINR(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN');
}
