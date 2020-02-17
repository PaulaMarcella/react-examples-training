import React from "react";
import numberToStars from "../utilities/numbersToStars";

export default function DriverCard(props) {
  const { name, rating, car, img } = props;
  return (
    <div className="car-container driver">
      <div>
        <img className="driver-img" src={img} alt={name} />
      </div>
      <div>
        <h4>{name}</h4>
        <p className="stars">{numberToStars(rating)}</p>
        <p>
          {car.model}
          {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
