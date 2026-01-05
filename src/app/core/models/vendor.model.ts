import { Award } from "./award.model";
import { Deal } from "./deal.model";
import { Package } from "./package.model";

export interface Vendor {
  id: number;
  name: string;
  category: string;
  city: string;
  priceRange: string;

  rating: number;
  totalReviews: number;

  description: string;

  images: string[];

  awards: Award[];
  packages: Package[];
  deals: Deal[];
}
