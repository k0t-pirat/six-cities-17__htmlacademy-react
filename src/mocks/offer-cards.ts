import { OfferCard } from '../types/offer';

export const mockOfferCards: OfferCard[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'img/apartment-01.jpg'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f01',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 240,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 3,
    'previewImage': 'img/room.jpg'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f02',
    'title': ' luxurious apartment at great location',
    'type': 'apartment',
    'price': 50,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5,
    'previewImage': 'img/apartment-02.jpg'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f03',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 150,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'previewImage': 'img/apartment-03.jpg'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f04',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 123,
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4,
    'previewImage': 'img/room.jpg'
  },
];

export const getMockOfferCards = () => mockOfferCards;
export const getMockFavoriteOfferCards = () => mockOfferCards.filter((offer) => offer.isFavorite);
export const getMockNearOfferCards = (offerId: string) => mockOfferCards.filter((offer) => offer.id !== offerId).slice(0, 3);
