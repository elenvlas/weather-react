import React from "react";

export default function Header() {
  return <ul className="list-city row row-cols-auto row-city">
          <li className="col-2"><a href="/">Lisbon</a></li>
          <li className="col-2"><a href="/paris">Paris</a></li>
          <li className="col-2"><a href="/sydney">Sydney</a></li>
          <li className="col"><a href="/san-francisco">San Francisco</a></li>
        </ul>
}