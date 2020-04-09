import React from "react";
import Spinner from "../layout/Spinner";

const Weather = ({ city, temp, description, country, icon, loading }) => {
  temp = Math.floor(temp);
  if (loading) {
    return <Spinner />;
  } else if (city) {
    return (
      <div className="card">
        <div className="all-center">
          <h1>
            The Current Weather in {city}, {country} is:
          </h1>
          <p className="my-1 d-flex">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
            />
            <span className="m-1 large">{description}</span>
          </p>
          <h2 className="large">
            {temp} <span className="text-danger">&deg;</span>c
          </h2>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Weather;
