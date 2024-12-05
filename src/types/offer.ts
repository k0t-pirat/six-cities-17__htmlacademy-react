import { User } from './user';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type OfferCardTemplate = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type FullOfferTemplate = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}

type OfferPreviewImage = {
  previewImage: string;
}

export type OfferCard = OfferCardTemplate & OfferPreviewImage;
export type Offer = OfferCardTemplate & FullOfferTemplate;
export type OfferFavorite = OfferCardTemplate & FullOfferTemplate & OfferPreviewImage;

export type FavoritesByCity = {[key: string]: OfferCard[]};
