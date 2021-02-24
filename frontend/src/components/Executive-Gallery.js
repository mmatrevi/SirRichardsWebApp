import React from "react";
import "./Content.css";
import ContentItem from "./ContentItem";
import Nav from "./Nav";

function Executive() {
  return (
    <div className="cards">
      <Nav />
      <h1>Executive Gallery</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ContentItem
              src="images/img-3.jpg"
              text="Explore the hidden world of African print Designs"
              label="Mystery"
            />
            <ContentItem
              src="images/img-4.jpg"
              text="Explore the hidden world of African print Designs"
              label="Adventure"
            />
            <ContentItem
              src="images/img-8.jpg"
              text="Explore the hidden world of African print Designs"
              label="Adrenaline"
            />
          </ul>

          <ul className="cards__items">
            <ContentItem
              src="images/img-3.jpg"
              text="Explore the hidden world of African print Designs"
              label="Mystery"
            />
            <ContentItem
              src="images/img-4.jpg"
              text="Explore the hidden world of African print Designs"
              label="Adventure"
            />
            <ContentItem
              src="images/img-8.jpg"
              text="Explore the hidden world of African print Designs"
              label="Adrenaline"
            />
          </ul>

          <ul className="cards__items">
            <ContentItem
              src="images/img-3.jpg"
              text="Explore the hidden world of African print Designs"
              label="Mystery"
            />
            <ContentItem
              src="images/img-4.jpg"
              text="Explore the hidden world of African print Designs"
              label="Adventure"
            />
            <ContentItem
              src="images/img-8.jpg"
              text="Explore the hidden world of African print Designs"
              label="Adrenaline"
            />
          </ul>

          <ul className="cards__items">
            <ContentItem
              src="images/img-3.jpg"
              text="Explore the hidden world of African print Designs"
              label="Mystery"
            />
            <ContentItem
              src="images/img-4.jpg"
              text="Explore the hidden world of African print Designs"
              label="Adventure"
            />
            <ContentItem
              src="images/img-8.jpg"
              text="Explore the hidden world of African print Designs"
              label="Adrenaline"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Executive;
