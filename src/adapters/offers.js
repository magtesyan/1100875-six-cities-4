import shortid from "shortid";

const fullOffers = new Map();
let cities = Array.from(fullOffers.keys());

const transformOffer = (offerFromServer) => {
  const transformedOffer = {
    id: shortid.generate(),
    name: offerFromServer.title,
    price: offerFromServer.price,
    rating: offerFromServer.rating,
    type: offerFromServer.type,
    rank: offerFromServer.is_premium,
    pictures: offerFromServer.images,
    description: offerFromServer.description,
    bedrooms: offerFromServer.bedrooms,
    guests: offerFromServer.max_adults,
    features: offerFromServer.goods,
    host: {
      avatar: offerFromServer.host.avatar_url,
      id: offerFromServer.host.id,
      super: offerFromServer.host.is_pro ? 1 : 0,
      name: offerFromServer.host.name
    },
    coordinates: [offerFromServer.location.latitude, offerFromServer.location.longitude],
    reviews: []
  };

  return transformedOffer;
};

const collectOffers = (offersFromServer) => {
  offersFromServer.forEach((offer) => {
    if (cities.indexOf(offer.city.name) === -1) {
      fullOffers.set(offer.city.name, [transformOffer(offer)]);
    } else {
      fullOffers.set(offer.city.name, [...fullOffers.get(offer.city.name), transformOffer(offer)]);
    }
    cities = Array.from(fullOffers.keys());
  });

  return fullOffers;
};

export {collectOffers, cities};