import Card from "./card.jsx";
import renderer from "react-test-renderer";
import React from "react";
import shortid from "shortid";

const Offers = [
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
];

it(`Cards are rendered correctly`, () => {
  const tree = renderer
    .create(<Card
      name={Offers[0].name}
      key={Offers[0].id}
      price={Offers[0].price}
      rating={Offers[0].rating}
      type={Offers[0].type}
      rank={Offers[0].rank}
      onOfferTitleClick = {() => {}}
      onMouseOver = {() => {}}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
