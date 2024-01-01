import React from "react";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-2 col-card">
        <div className="card card-border">
          <div className="card-body">
            <p className="card-day">Tue</p>
            <i className="fa-solid fa-sun card-icon"></i>
            <p className="card-tempr">25°</p>
          </div>
        </div>
      </div>
      <div className="col-2 col-card">
        <div className="card card-border">
          <div className="card-body">
            <p className="card-day">Wed</p>
            <i className="fa-solid fa-cloud card-icon"></i>
            <p className="card-tempr">25°</p>
          </div>
        </div>
      </div>
      <div className="col-2 col-card">
        <div className="card card-border">
          <div className="card-body">
            <p className="card-day">Thu</p>
            <i className="fa-solid fa-sun card-icon"></i>
            <p className="card-tempr">27°</p>
          </div>
        </div>
      </div>
      <div className="col-2 col-card">
        <div className="card card-border">
          <div className="card-body">
            <p className="card-day">Fri</p>
            <i className="fa-solid fa-cloud card-icon"></i>
            <p className="card-tempr">25°</p>
          </div>
        </div>
      </div>
      <div className="col-2 col-card">
        <div className="card card-border">
          <div className="card-body">
            <p className="card-day">Sat</p>
            <i className="fa-solid fa-cloud-showers-heavy card-icon"></i>
            <p className="card-tempr">23°</p>
          </div>
        </div>
      </div>
    </div>
  );
}