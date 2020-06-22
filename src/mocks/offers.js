import shortid from "shortid";

const Offers = {
  OFFERS_COUNT: 312,
  OFFERS_NAMES: [
    {
      id: shortid.generate(),
      name: `Beautiful & luxurious apartment at great location`,
      price: 80,
      rating: 1,
      type: `Apartment`,
      rank: `Premium`
    },
    {
      id: shortid.generate(),
      name: `Wood and stone place`,
      price: 90,
      rating: 2,
      type: `Private room`,
      rank: `Premium`
    },
    {
      id: shortid.generate(),
      name: `Canal View Prinsengracht`,
      price: 100,
      rating: 3,
      type: `Apartment`,
      rank: `Premium`
    },
    {
      id: shortid.generate(),
      name: `Nice, cozy, warm big bed apartment`,
      price: 110,
      rating: 4,
      type: `Private room`,
      rank: `Premium`
    },
    {
      id: shortid.generate(),
      name: `Wood and stone place`,
      price: 120,
      rating: 5,
      type: `Apartment`,
      rank: `Premium`
    }
  ]
};

export {Offers};
