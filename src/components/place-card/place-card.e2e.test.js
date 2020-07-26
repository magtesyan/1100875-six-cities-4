import Adapter from "enzyme-adapter-react-16";
import {Router} from "react-router-dom";
import Enzyme, {mount} from "enzyme";
import React from "react";
import shortid from "shortid";
import history from "../../history.js";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  id: shortid.generate(),
  name: `Beautiful & luxurious apartment at great location`,
  price: 80,
  rating: 1,
  type: `Apartment`,
  rank: true
};

const className = `cities__place-card`;

it(`When mouse on card - card details sent`, () => {
  const onMouseOver = jest.fn((args) => args);
  const expectedObj = {
    name: `Beautiful & luxurious apartment at great location`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: true
  };

  const card = mount(
      <Router
        history={history}
      >
        <PlaceCard
          className = {className}
          offer={mock}
          key={mock.id}
          onOfferTitleClick = {() => {}}
          onMouseOver = {onMouseOver}
          onFavoriteButtonClick={jest.fn()}
          isUserAuthorized={true}
        />
      </Router>);

  const article = card.find(`article`);
  article.simulate(`mouseover`);

  expect(onMouseOver).toHaveBeenCalledTimes(1);
  expect(onMouseOver.mock.calls[0][0]).toMatchObject(expectedObj);
});

it(`When title is clicked - card details sent`, () => {
  const onOfferTitleClick = jest.fn((args) => args);
  const expectedObj = {
    name: `Beautiful & luxurious apartment at great location`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: true
  };

  const card = mount(
      <Router
        history={history}
      >
        <PlaceCard
          className = {className}
          offer={mock}
          key={mock.id}
          onOfferTitleClick = {onOfferTitleClick}
          onFavoriteButtonClick={jest.fn()}
          isUserAuthorized={true}
          onMouseOver = {jest.fn()}
        />
      </Router>);

  const title = card.find(`.place-card__name`);
  title.simulate(`click`);

  expect(onOfferTitleClick).toHaveBeenCalledTimes(1);
  expect(onOfferTitleClick.mock.calls[0][0]).toMatchObject(expectedObj);
});
