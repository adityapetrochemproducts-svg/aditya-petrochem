export const siteConfig = {
  name: "Aditya Petrochem",
  shortName: "Aditya Petrochem",
  tagline: "Industrial Oils & Lubricants",
  description:
    "Aditya Petrochem supplies cutting oils, punching oils, hydraulic oils, gear oils and greases engineered for demanding manufacturing and OEM applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.adityapetrochem.com",
  email: "adityapetrochem.products@gmail.com",
  phone: "+91 81463 33042",
  phoneHref: "+918146333042",
  address: {
    line1: "Ground Floor, House No. 181/B3",
    line2: "Nalagarh Road",
    city: "Pinjore, District Panchkula",
    state: "Haryana",
    zip: "134102",
    country: "India",
  },
  businessHours: [
    { days: "Monday – Saturday", hours: "9:30 AM – 6:30 PM IST" },
    { days: "Sunday", hours: "Closed" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/aditya-petrochem",
    // Add more links here as they become available.
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export const whyChooseUs = [
  {
    title: "Consistent Quality",
    description:
      "Every batch is formulated to a controlled process so performance stays predictable, shipment after shipment.",
  },
  {
    title: "Industrial-Grade Performance",
    description:
      "Products are engineered for the loads, temperatures and tolerances found on real production floors — not general-purpose use.",
  },
  {
    title: "Reliable Supply",
    description:
      "We plan inventory around production schedules, so your line isn't waiting on a delayed drum.",
  },
  {
    title: "Technical Support",
    description:
      "Our team works with your process engineers to match the right oil to your machine, material and tooling.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Direct supply relationships keep pricing sharp for both project volumes and recurring monthly orders.",
  },
  {
    title: "Multiple Industrial Applications",
    description:
      "One supplier for cutting, punching, hydraulic and general lubrication needs across your facility.",
  },
];

export const industries = [
  { name: "Manufacturing", description: "General production lines and industrial plants." },
  { name: "Automotive", description: "Component machining and assembly operations." },
  { name: "Metal Fabrication", description: "Cutting, forming and finishing of metal parts." },
  { name: "CNC Machining", description: "Precision turning and milling operations." },
  { name: "Engineering", description: "Tool rooms and precision engineering workshops." },
  { name: "Heavy Machinery", description: "Hydraulic systems in industrial equipment." },
];

export const productCategories: {
  name: string;
  slugFilter: string;
  description: string;
}[] = [
  {
    name: "Cutting Oil",
    slugFilter: "Cutting Oil",
    description: "Formulated to reduce friction and heat during metal cutting operations.",
  },
  {
    name: "Punching Oil",
    slugFilter: "Punching Oil",
    description: "Supports clean, consistent punching and shearing on sheet metal lines.",
  },
  {
    name: "Hydraulic Oil",
    slugFilter: "Hydraulic Oil",
    description: "Formulated for hydraulic systems in industrial and heavy equipment.",
  },
  {
    name: "Gear Oil",
    slugFilter: "Gear Oil",
    description: "Formulated for enclosed industrial gearboxes across common ISO viscosity grades.",
  },
  {
    name: "Grease",
    slugFilter: "Grease",
    description: "Bearing and general lubrication greases across common NLGI consistency grades.",
  },
  {
    name: "Transformer Oil",
    slugFilter: "Transformer Oil",
    description: "Insulating and cooling oil for oil-filled transformers and switchgear.",
  },
  {
    name: "Specialty Oils",
    slugFilter: "Specialty Oils",
    description: "Purpose-specific oils for tube bending, vacuum pumps and rust prevention.",
  },
];
