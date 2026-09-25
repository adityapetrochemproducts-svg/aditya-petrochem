import type { Product } from "@/types/product";

/**
 * Central product dataset.
 *
 * To add a product: append a new object to this array with a unique
 * `id` and `slug`. No other files need to change — product listing pages,
 * detail pages, sitemap and structured data all read from here.
 *
 * Specification values are placeholders where real lab data has not been
 * supplied. Replace with verified figures before publishing claims. Grade
 * values (ISO VG, NLGI) reflect the product's own named grade and are not
 * fabricated performance claims.
 */
export const products: Product[] = [
  {
    id: "cutting-oil-01",
    slug: "cutting-oil",
    name: "Cutting Oil",
    category: "Cutting Oil",
    shortDescription:
      "A neat cutting oil formulated to reduce friction and heat build-up across general metal-cutting operations.",
    description: [
      "Cutting Oil is formulated for turning, drilling, milling and general metal-cutting operations where consistent lubricity and heat control matter to tool life and surface finish.",
      "It is designed to be used as supplied at the machine, helping maintain stable performance across a shift without frequent adjustment.",
    ],
    applications: [
      "Turning and drilling on ferrous metals",
      "Milling operations on conventional and CNC machines",
      "General-purpose metal cutting where a neat oil is preferred",
    ],
    features: [
      "Formulated for consistent lubricity during cutting",
      "Supports heat dissipation at the tool-workpiece interface",
      "Designed to help protect tooling from premature wear",
      "Stable performance across a working shift",
    ],
    specifications: [
      { label: "Appearance", value: "Clear amber liquid" },
      { label: "Base Type", value: "Mineral oil base" },
      { label: "Viscosity Grade", value: "To be confirmed (placeholder)" },
      { label: "Flash Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "20 Litre Can" },
      { size: "50 Litre Drum" },
      { size: "210 Litre Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "cutting",
    featured: true,
  },
  {
    id: "punching-oil-01",
    slug: "punching-oil",
    name: "Punching Oil",
    category: "Punching Oil",
    shortDescription:
      "Supports clean, consistent punching and blanking on sheet metal press lines.",
    description: [
      "Punching Oil is formulated for press operations such as punching, blanking and shearing, where consistent film strength helps maintain clean cuts and reduce tool wear.",
      "Suited to continuous production runs where predictable behaviour from batch to batch is important.",
    ],
    applications: [
      "Punching and blanking on sheet metal press lines",
      "Shearing operations",
      "Progressive die and tool room work",
    ],
    features: [
      "Formulated for consistent film strength during punching",
      "Supports clean cut edges and reduced burr formation",
      "Designed to help protect dies and punches",
      "Consistent behaviour across production batches",
    ],
    specifications: [
      { label: "Appearance", value: "Light amber liquid" },
      { label: "Base Type", value: "Mineral oil base" },
      { label: "Viscosity Grade", value: "To be confirmed (placeholder)" },
      { label: "Flash Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "20 Litre Can" },
      { size: "50 Litre Drum" },
      { size: "210 Litre Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "punching",
    featured: true,
  },
  {
    id: "hydraulic-oil-01",
    slug: "hydraulic-oil",
    name: "Hydraulic Oil",
    category: "Hydraulic Oil",
    shortDescription:
      "Formulated for hydraulic systems in industrial equipment and heavy machinery.",
    description: [
      "Hydraulic Oil is formulated to support the smooth, reliable operation of hydraulic systems found in presses, injection moulding machines and other industrial equipment.",
      "Designed with system cleanliness and stable operation in mind, supporting the pumps, valves and seals that keep hydraulic circuits running.",
    ],
    applications: [
      "Hydraulic presses and power packs",
      "Injection moulding machinery",
      "Heavy machinery hydraulic circuits",
    ],
    features: [
      "Formulated to support smooth hydraulic system operation",
      "Designed with system component protection in mind",
      "Consistent viscosity behaviour in service",
      "Suited to continuous industrial duty cycles",
    ],
    specifications: [
      { label: "Appearance", value: "Clear light amber liquid" },
      { label: "Base Type", value: "Mineral oil base" },
      { label: "Viscosity Grade (ISO VG)", value: "To be confirmed (placeholder)" },
      { label: "Flash Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "20 Litre Can" },
      { size: "50 Litre Drum" },
      { size: "210 Litre Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "hydraulic",
    featured: true,
  },
  {
    id: "copper-bending-oil-01",
    slug: "copper-bending-oil",
    name: "Copper Bending Oil",
    category: "Specialty Oils",
    shortDescription:
      "A specialty oil for lubricating copper tubes during bending and forming operations.",
    description: [
      "Copper Bending Oil is formulated for use on copper tube during bending and forming, helping the tube move smoothly through the process while supporting surface finish.",
      "Commonly used in refrigeration, air-conditioning and general tube fabrication work where clean, consistent bends matter.",
    ],
    applications: [
      "Copper tube bending for refrigeration and air-conditioning line sets",
      "Pipe and tube forming operations",
      "HVAC installation and fabrication work",
    ],
    features: [
      "Formulated to reduce friction during tube bending",
      "Helps protect tube surface finish during forming",
      "Supports smooth, consistent bends",
    ],
    specifications: [
      { label: "Appearance", value: "Light amber liquid" },
      { label: "Base Type", value: "Mineral oil base" },
      { label: "Viscosity Grade", value: "To be confirmed (placeholder)" },
      { label: "Flash Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "1 Litre Can" },
      { size: "5 Litre Can" },
      { size: "20 Litre Can" },
    ],
    artVariant: "bending",
    featured: true,
  },
  {
    id: "vacuum-oil-01",
    slug: "vacuum-oil",
    name: "Vacuum Oil",
    category: "Specialty Oils",
    shortDescription:
      "Formulated for use in rotary vane and general industrial vacuum pumps.",
    description: [
      "Vacuum Oil is formulated for use in vacuum pump systems, supporting stable operation and consistent sealing within the pump.",
      "Suited to general industrial vacuum applications where dependable pump performance is required.",
    ],
    applications: [
      "Rotary vane vacuum pumps",
      "General vacuum pump lubrication",
      "Industrial vacuum systems",
    ],
    features: [
      "Formulated for use in vacuum pump systems",
      "Designed to support stable pump operation",
      "Consistent behaviour under vacuum conditions",
    ],
    specifications: [
      { label: "Appearance", value: "Clear liquid" },
      { label: "Base Type", value: "Mineral oil base" },
      { label: "Viscosity Grade", value: "To be confirmed (placeholder)" },
      { label: "Vapour Pressure", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "5 Litre Can" },
      { size: "20 Litre Can" },
      { size: "50 Litre Drum" },
    ],
    artVariant: "vacuum",
  },
  {
    id: "transformer-oil-01",
    slug: "transformer-oil",
    name: "Transformer Oil",
    category: "Transformer Oil",
    shortDescription:
      "An insulating and cooling oil formulated for oil-filled transformers and switchgear.",
    description: [
      "Transformer Oil is formulated to act as both an electrical insulating medium and a cooling fluid inside oil-filled transformers and switchgear.",
      "Used for the initial filling of transformer units as well as routine top-up and maintenance.",
    ],
    applications: [
      "Oil-filled distribution and power transformers",
      "Electrical switchgear requiring insulating oil",
      "General transformer top-up and maintenance",
    ],
    features: [
      "Formulated as an electrical insulating and cooling medium",
      "Designed to support heat dissipation in transformers",
      "Consistent behaviour in service",
    ],
    specifications: [
      { label: "Appearance", value: "Clear pale yellow liquid" },
      { label: "Base Type", value: "Mineral oil base" },
      { label: "Dielectric Strength", value: "To be confirmed (placeholder)" },
      { label: "Flash Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "20 Litre Can" },
      { size: "50 Litre Drum" },
      { size: "210 Litre Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "transformer",
    featured: true,
  },
  {
    id: "gear-oil-220",
    slug: "gear-oil-220",
    name: "Gear Oil 220",
    category: "Gear Oil",
    shortDescription: "An ISO VG 220 industrial gear oil for enclosed gearbox lubrication.",
    description: [
      "Gear Oil 220 is an ISO VG 220 industrial gear oil formulated for enclosed gear drives, helping maintain a stable lubricating film under load.",
      "Suited to gearboxes specified for a VG 220 grade across general industrial and manufacturing equipment.",
    ],
    applications: [
      "Enclosed industrial gearboxes",
      "Worm, helical and bevel gear drives",
      "General industrial gear lubrication",
    ],
    features: [
      "Formulated for enclosed gear drive lubrication",
      "Designed to support consistent film strength under load",
      "Suited to continuous industrial duty cycles",
    ],
    specifications: [
      { label: "Appearance", value: "Amber liquid" },
      { label: "Base Type", value: "Mineral oil base" },
      { label: "Viscosity Grade", value: "ISO VG 220" },
      { label: "Flash Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "20 Litre Can" },
      { size: "50 Litre Drum" },
      { size: "210 Litre Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "gear",
  },
  {
    id: "gear-oil-320",
    slug: "gear-oil-320",
    name: "Gear Oil 320",
    category: "Gear Oil",
    shortDescription: "An ISO VG 320 industrial gear oil for enclosed gearbox lubrication.",
    description: [
      "Gear Oil 320 is an ISO VG 320 industrial gear oil formulated for enclosed gear drives, helping maintain a stable lubricating film under load.",
      "Suited to gearboxes specified for a VG 320 grade across general industrial and manufacturing equipment.",
    ],
    applications: [
      "Enclosed industrial gearboxes",
      "Worm, helical and bevel gear drives",
      "General industrial gear lubrication",
    ],
    features: [
      "Formulated for enclosed gear drive lubrication",
      "Designed to support consistent film strength under load",
      "Suited to continuous industrial duty cycles",
    ],
    specifications: [
      { label: "Appearance", value: "Amber liquid" },
      { label: "Base Type", value: "Mineral oil base" },
      { label: "Viscosity Grade", value: "ISO VG 320" },
      { label: "Flash Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "20 Litre Can" },
      { size: "50 Litre Drum" },
      { size: "210 Litre Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "gear",
    featured: true,
  },
  {
    id: "gear-oil-460",
    slug: "gear-oil-460",
    name: "Gear Oil 460",
    category: "Gear Oil",
    shortDescription: "An ISO VG 460 industrial gear oil for enclosed gearbox lubrication.",
    description: [
      "Gear Oil 460 is an ISO VG 460 industrial gear oil formulated for enclosed gear drives, helping maintain a stable lubricating film under heavier loads.",
      "Suited to gearboxes specified for a VG 460 grade across general industrial and manufacturing equipment.",
    ],
    applications: [
      "Enclosed industrial gearboxes under heavier load",
      "Worm, helical and bevel gear drives",
      "General industrial gear lubrication",
    ],
    features: [
      "Formulated for enclosed gear drive lubrication",
      "Designed to support consistent film strength under load",
      "Suited to continuous industrial duty cycles",
    ],
    specifications: [
      { label: "Appearance", value: "Amber liquid" },
      { label: "Base Type", value: "Mineral oil base" },
      { label: "Viscosity Grade", value: "ISO VG 460" },
      { label: "Flash Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "20 Litre Can" },
      { size: "50 Litre Drum" },
      { size: "210 Litre Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "gear",
  },
  {
    id: "grease-ep3",
    slug: "grease-ep3",
    name: "Grease EP3",
    category: "Grease",
    shortDescription: "An NLGI 3 extreme-pressure grease for firmer-consistency bearing applications.",
    description: [
      "Grease EP3 is an NLGI Grade 3 extreme-pressure grease formulated for applications that call for a firmer consistency.",
      "Suited to bearings and lubrication points specified for a stiffer EP3 grease.",
    ],
    applications: [
      "High-temperature bearing applications",
      "Bearings requiring a firmer grease consistency",
      "General industrial grease points",
    ],
    features: [
      "Formulated for consistent lubrication at NLGI Grade 3",
      "Designed to adhere to lubrication points in service",
      "Supports general bearing and machinery lubrication",
    ],
    specifications: [
      { label: "Appearance", value: "Smooth amber grease" },
      { label: "NLGI Grade", value: "3" },
      { label: "Thickener Type", value: "To be confirmed (placeholder)" },
      { label: "Drop Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "5 Kg Pail" },
      { size: "20 Kg Pail" },
      { size: "180 Kg Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "grease",
  },
  {
    id: "grease-ep2",
    slug: "grease-ep2",
    name: "Grease EP2",
    category: "Grease",
    shortDescription: "An NLGI 2 extreme-pressure grease for general-purpose bearing lubrication.",
    description: [
      "Grease EP2 is an NLGI Grade 2 extreme-pressure grease formulated for general-purpose bearing and machinery lubrication.",
      "A common, widely specified grade suited to a broad range of industrial lubrication points.",
    ],
    applications: [
      "General-purpose bearing lubrication",
      "Industrial bearings and general machinery",
      "Common multi-application grease points",
    ],
    features: [
      "Formulated for consistent lubrication at NLGI Grade 2",
      "Designed to adhere to lubrication points in service",
      "Supports general bearing and machinery lubrication",
    ],
    specifications: [
      { label: "Appearance", value: "Smooth amber grease" },
      { label: "NLGI Grade", value: "2" },
      { label: "Thickener Type", value: "To be confirmed (placeholder)" },
      { label: "Drop Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "5 Kg Pail" },
      { size: "20 Kg Pail" },
      { size: "180 Kg Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "grease",
    featured: true,
  },
  {
    id: "grease-ep0",
    slug: "grease-ep0",
    name: "Grease EP0",
    category: "Grease",
    shortDescription: "An NLGI 0 soft-consistency grease suited to centralised lubrication systems.",
    description: [
      "Grease EP0 is an NLGI Grade 0 extreme-pressure grease with a soft consistency, formulated to flow through centralised and semi-fluid lubrication systems.",
      "Suited to gearboxes and lubrication points that call for an EP0 grade.",
    ],
    applications: [
      "Centralised lubrication systems",
      "Low-temperature applications requiring a softer grease",
      "Gearboxes requiring semi-fluid grease",
    ],
    features: [
      "Formulated for consistent lubrication at NLGI Grade 0",
      "Flows through centralised lubrication lines",
      "Supports general bearing and gearbox lubrication",
    ],
    specifications: [
      { label: "Appearance", value: "Smooth amber grease" },
      { label: "NLGI Grade", value: "0" },
      { label: "Thickener Type", value: "To be confirmed (placeholder)" },
      { label: "Drop Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "5 Kg Pail" },
      { size: "20 Kg Pail" },
      { size: "180 Kg Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "grease",
  },
  {
    id: "grease-ep00",
    slug: "grease-ep00",
    name: "Grease EP00",
    category: "Grease",
    shortDescription: "An NLGI 00 semi-fluid grease suited to centralised and automatic lubrication systems.",
    description: [
      "Grease EP00 is an NLGI Grade 00 extreme-pressure grease with a semi-fluid consistency, formulated for centralised and automatic lubrication systems.",
      "Suited to enclosed gear cases and lubrication points that call for an EP00 grade.",
    ],
    applications: [
      "Centralised and automatic lubrication systems",
      "Enclosed gear cases requiring semi-fluid grease",
      "Cold ambient applications",
    ],
    features: [
      "Formulated for consistent lubrication at NLGI Grade 00",
      "Flows through centralised and automatic lubrication lines",
      "Suited to cold ambient conditions",
    ],
    specifications: [
      { label: "Appearance", value: "Smooth amber grease" },
      { label: "NLGI Grade", value: "00" },
      { label: "Thickener Type", value: "To be confirmed (placeholder)" },
      { label: "Drop Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "5 Kg Pail" },
      { size: "20 Kg Pail" },
      { size: "180 Kg Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "grease",
  },
  {
    id: "grease-ep000",
    slug: "grease-ep000",
    name: "Grease EP000",
    category: "Grease",
    shortDescription: "An NLGI 000 fluid grease suited to enclosed gearboxes and automatic dispensing systems.",
    description: [
      "Grease EP000 is an NLGI Grade 000 extreme-pressure grease with a fluid consistency, formulated for enclosed gearboxes and automatic dispensing systems.",
      "Suited to lubrication points that specifically call for the softest, most fluid EP000 grade.",
    ],
    applications: [
      "Centralised lubrication systems requiring fluid grease",
      "Enclosed gearboxes and chain cases",
      "Automatic dispensing systems",
    ],
    features: [
      "Formulated for consistent lubrication at NLGI Grade 000",
      "Flows freely through automatic dispensing systems",
      "Suited to enclosed gearbox and chain case lubrication",
    ],
    specifications: [
      { label: "Appearance", value: "Smooth amber grease" },
      { label: "NLGI Grade", value: "000" },
      { label: "Thickener Type", value: "To be confirmed (placeholder)" },
      { label: "Drop Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "5 Kg Pail" },
      { size: "20 Kg Pail" },
      { size: "180 Kg Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "grease",
  },
  {
    id: "rust-preventive-oil-01",
    slug: "rust-preventive-oil",
    name: "Rust Preventive Oil",
    category: "Specialty Oils",
    shortDescription:
      "A protective oil that leaves a thin film on metal surfaces to help prevent corrosion.",
    description: [
      "Rust Preventive Oil is formulated to leave a thin protective film on machined metal parts, helping prevent corrosion during storage and transit.",
      "Suited to interim protection between processing stages as well as longer-term storage of finished components.",
    ],
    applications: [
      "In-process and interim rust protection on machined metal parts",
      "Protective coating during storage and transit",
      "General metal surface protection",
    ],
    features: [
      "Formulated to leave a protective film on metal surfaces",
      "Designed to help prevent corrosion during storage",
      "Suitable for interim protection between processing stages",
    ],
    specifications: [
      { label: "Appearance", value: "Amber liquid film" },
      { label: "Base Type", value: "Mineral oil base" },
      { label: "Film Type", value: "To be confirmed (placeholder)" },
      { label: "Flash Point", value: "To be confirmed (placeholder)" },
    ],
    packaging: [
      { size: "5 Litre Can" },
      { size: "20 Litre Can" },
      { size: "210 Litre Drum", note: "Standard bulk packaging" },
    ],
    artVariant: "rust",
    featured: true,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}
