import React from "react";

export default function Header() {
  return <ul className="list-city row row-cols-auto row-city">
          <li className="col-2"><a className="col-2" href="/WeatherSearch">Lisbon</a></li>
          <li className="col-2"><a href="/WeatherSearch">Paris</a></li>
          <li className="col-2"><a href="/WeatherSearch">Sydney</a></li>
          <li className="col"><a href="/WeatherSearch">San Francisco</a></li>
        </ul>
}