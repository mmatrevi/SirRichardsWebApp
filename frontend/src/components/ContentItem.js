import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <Link className="cards__item__link" to={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img className="cards__item__img" alt="Travel Pic" src={props.src} />
        </figure>
      </Link>
    </>
  );
}

export default CardItem;
