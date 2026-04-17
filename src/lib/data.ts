export type Audience = "company" | "family";

export type Flavor = {
  name: string;
  description: string;
  allergens: string[];
  seasonal?: boolean;
  image: string;
  audience: Audience[];
};

export type EventPackage = {
  id: string;
  name: string;
  audience: Audience;
  description: string;
  basePrice: number;
  durationMinutes: number;
  guestRange: [number, number];
  perks: string[];
};

export type AddOn = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ice-cream", label: "Ice Cream" },
  { href: "/booking", label: "Booking" },
  { href: "/reviews", label: "Reviews" },
  { href: "/work-events", label: "Work Events" },
  { href: "/hiring", label: "Hiring" },
  { href: "/contact", label: "Contact" }
] as const;

export const heroMetrics = [
  { label: "Events served", value: "450+" },
  { label: "Regional coverage", value: "Noord-Brabant" },
  { label: "Reply speed", value: "Within 1 business day" }
];

export const flavors: Flavor[] = [
  {
    name: "Cloudberry Vanilla",
    description: "Creamy vanilla folded with bright cloudberry ribbons for weddings and premium receptions.",
    allergens: ["Milk"],
    image: "/IceCreamLogo.png",
    audience: ["company", "family"]
  },
  {
    name: "Bubblegum Swirl",
    description: "A loud, colorful favorite designed to make children point at the menu before they can read it.",
    allergens: ["Milk"],
    image: "/IceCreamLogo.png",
    audience: ["family"]
  },
  {
    name: "Salted Caramel Pretzel",
    description: "Balanced sweetness with a little crunch, built for company launches and evening events.",
    allergens: ["Milk", "Gluten"],
    image: "/IceCreamLogo.png",
    audience: ["company"]
  },
  {
    name: "Winter Cinnamon Cookie",
    description: "A winter edition flavor for Christmas markets, office celebrations, and cold-weather pop-ups.",
    allergens: ["Milk", "Gluten"],
    image: "/IceCreamLogo.png",
    seasonal: true,
    audience: ["company", "family"]
  }
];

export const packages: EventPackage[] = [
  {
    id: "quick-stop",
    name: "Quick Stop",
    audience: "family",
    description: "A compact visit for birthdays, schoolyards, and neighborhood gatherings.",
    basePrice: 3900,
    durationMinutes: 60,
    guestRange: [30, 70],
    perks: ["2 flavor choices", "Decorated bike setup", "Music cues for arrival"]
  },
  {
    id: "brand-moment",
    name: "Brand Moment",
    audience: "company",
    description: "A polished company event package for launches, office activations, and hospitality zones.",
    basePrice: 6900,
    durationMinutes: 120,
    guestRange: [60, 180],
    perks: ["3 flavor choices", "Branded topping station", "Staff in event uniform"]
  },
  {
    id: "festival-flow",
    name: "Festival Flow",
    audience: "company",
    description: "High-throughput setup for public events, fairs, and large summer campaigns.",
    basePrice: 11900,
    durationMinutes: 240,
    guestRange: [150, 400],
    perks: ["4 flavor choices", "Queue signage", "Operations coordinator"]
  }
];

export const addOns: AddOn[] = [
  { id: "dry-ice", name: "Dry Ice Show", description: "A theatrical reveal with frosty vapor at service start.", price: 850 },
  { id: "sprinkle-bar", name: "Sprinkle Bar", description: "Self-serve toppings with color-coded allergen labels.", price: 650 },
  { id: "custom-cups", name: "Custom Cups", description: "Branded or party-themed cups for photos and giveaways.", price: 1200 }
];

export const testimonials = [
  {
    author: "Nora Lindgren",
    role: "HR Lead, Bright Harbor",
    quote: "The bike changed our summer kickoff from a standard office event into something people kept sharing for weeks."
  },
  {
    author: "Matteo & Elin",
    role: "Birthday hosts",
    quote: "The kids treated the arrival like a parade, and the adults stayed for the coffee-affogato add-on."
  },
  {
    author: "Sofia Persson",
    role: "Event Manager, Northline",
    quote: "Fast setup, clear communication, no chaos. It felt playful without losing commercial polish."
  }
];

export const serviceAreas = [
  { name: "Eindhoven", postalPrefixes: ["55", "56", "57", "58"], travelFee: 0 },
  { name: "'s-Hertogenbosch", postalPrefixes: ["52", "53"], travelFee: 0 },
  { name: "Tilburg", postalPrefixes: ["50", "51"], travelFee: 0 },
  { name: "Breda", postalPrefixes: ["48", "49"], travelFee: 0 },
  { name: "West-Brabant", postalPrefixes: ["46", "47"], travelFee: 0 },
  { name: "Surrounding region", postalPrefixes: ["40", "41", "42", "43", "44", "45", "54", "59", "60"], travelFee: 0 }
];

export const faqs = [
  {
    category: "Booking",
    question: "How far in advance should we book?",
    answer: "For summer weekends and company launches, 4 to 8 weeks is realistic. Smaller private events can often be handled faster."
  },
  {
    category: "Operations",
    question: "Can you serve indoors?",
    answer: "Yes, as long as access width, power needs, and floor protection are approved during the quote process."
  },
  {
    category: "Dietary",
    question: "Do you show allergen information clearly?",
    answer: "Every flavor card includes allergen visibility, and the configurator highlights any add-on with common allergen exposure."
  }
];

export const adminCommands = [
  { name: "/new-quote", description: "Create a new quote request from selected package, guest count, add-ons, and event details." },
  { name: "/estimate-price", description: "Calculate a live estimated event price based on package rules and selections." },
  { name: "/check-area", description: "Validate whether an event location is inside the supported service area and apply travel fees." },
  { name: "/add-flavor", description: "Create a new flavor card with description, allergen info, imagery, and seasonal flags." },
  { name: "/publish-season", description: "Activate or deactivate seasonal offers such as winter edition products." },
  { name: "/feature-review", description: "Approve and pin a testimonial or review to homepage and sales pages." },
  { name: "/event-gallery", description: "Upload and organize event photos into the public gallery." },
  { name: "/open-bookings", description: "Show upcoming bookings, statuses, and operational notes in the admin dashboard." }
];
