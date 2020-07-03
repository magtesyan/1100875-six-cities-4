import {BrowserRouter} from "react-router-dom";
import React from "react";
import renderer from "react-test-renderer";
import shortid from "shortid";

import Main from "./main.jsx";

const offers = [
  {
    id: shortid.generate(),
    name: `Beautiful & luxurious apartment at great location`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: `Premium`,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: shortid.generate(),
    name: `Wood and stone place`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: `Premium`,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: shortid.generate(),
    name: `Canal View Prinsengracht`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: `Premium`,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: shortid.generate(),
    name: `Nice, cozy, warm big bed apartment`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: `Premium`,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: shortid.generate(),
    name: `Wood and stone place`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: `Premium`,
    coordinates: [52.3909553943508, 4.85309666406198],
  }
];

const createMapBlock = () => {
  const div = global.document.createElement(`div`);
  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);
};

it(`Render Main`, () => {
  createMapBlock();
  const tree = renderer
    .create(
        <BrowserRouter>
          <Main
            offers={offers}
            onOfferTitleClick={() => {}}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
