import PropTypes from "prop-types";
import React from "react";

import {CITY_COORDINATES, OFFER_CARDS_CLASSES} from "../../const.js";
import CityList from "../city-list/city-list.jsx";
import Map from "../map/map.jsx";
import PlaceCardsList from "../place-cards-list/place-cards-list.jsx";

const Main = (props) => {
  const {fullOffers, offers, onOfferTitleClick, onCityClick, city} = props;
  const printPlacesFoundCount = offers.length ? `${offers.length} places to stay in ${city}` : `No places to stay available`;

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList
            fullOffers={fullOffers}
            onCityClick={onCityClick}
            activeCity={city}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{printPlacesFoundCount}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {
                  <PlaceCardsList
                    className={OFFER_CARDS_CLASSES.get(`main-page`)}
                    offers = {offers}
                    onOfferTitleClick = {onOfferTitleClick}
                  />
                }
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {
                  offers.length &&
                  <Map
                    key={city}
                    city={CITY_COORDINATES.get(city)}
                    offers = {offers}
                  />
                }
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  fullOffers: PropTypes.instanceOf(Map).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

export default Main;
