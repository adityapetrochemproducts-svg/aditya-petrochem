export type ProductCategory =
  | "Cutting Oil"
  | "Punching Oil"
  | "Hydraulic Oil"
  | "Gear Oil"
  | "Grease"
  | "Transformer Oil"
  | "Specialty Oils";

export interface ProductPackagingOption {
  size: string;
  note?: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export type ProductArtVariant =
  | "cutting"
  | "punching"
  | "hydraulic"
  | "gear"
  | "grease"
  | "transformer"
  | "bending"
  | "vacuum"
  | "rust";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string[];
  applications: string[];
  features: string[];
  specifications: ProductSpecification[];
  packaging: ProductPackagingOption[];
  /** Visual accent used for placeholder art (see components/ui/ProductArt) */
  artVariant: ProductArtVariant;
  featured?: boolean;
}
