export interface Listing {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
}

export interface Room {
  id: string;
  title: string;
  price: number;
  stars: number;
  reviews: number;
  location: string;
  images: string[];
  host: {
    name: string;
    avatar: string;
  };
  amenities: string[];
  description: string;
}
