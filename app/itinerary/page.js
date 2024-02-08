'use client'
import { useSelector } from "react-redux";
import Link from "next/link";
import React from "react";


const findLengthOfTrip = (startDate, endDate) => {
  const dates = [];
  let startTripDate = new Date(startDate);
  let endTripDate = new Date(endDate);

  while (startTripDate <= endTripDate) {
    dates.push(new Date(startTripDate).toISOString().split('T')[0]);
    startTripDate.setDate(startTripDate.getDate() + 1);
  }
  return dates;
}

const getSpelledOutDate = (dateString) => {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

const RenderMeals = ({ meals, date }) => {
  const mealsForEachDate = meals.filter((meal) => meal.date === date);

  return mealsForEachDate.map((meal) => (
    <div key={meal.id}>
      <table className="row">
        <tbody>
          <tr className="row">
            <td className="col-md-6">{meal.name}</td>
            <td className="col-md-6">{meal.startTime} - {meal.endTime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
};

const RenderAttractions = ({ attractions, date }) => {
  const attractionsForEachDate = attractions.filter((attraction) => attraction.date === date);

  return attractionsForEachDate.map((attraction) => (
    <div key={attraction.id}>
      <table className="row">
        <tbody>
          <tr className="row">
            <td className="col-md-6">{attraction.name}</td>
            <td className="col-md-6">{attraction.startTime} - {attraction.endTime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
};


const RenderItinerary = () => {
  const trips = useSelector((state) => state.trips.trips);

  return trips.map((itinerary) => {
    const dateRange = findLengthOfTrip(itinerary.startDate, itinerary.endDate);

    return (
      <div key={itinerary.id}>
        <h2>Itinerary for {itinerary.city}, {itinerary.state}</h2>
        <p>Hotel: {itinerary.hotel.name} at {itinerary.hotel.address}</p>
        <br />

        <table className="row">
          <tbody>
            {dateRange.map((date) => (
              <React.Fragment key={date}>
                <tr className="row">
                  <td className="col-md-8">
                    <div><strong>{getSpelledOutDate(date)}</strong></div>
                    <div>
                      <Link href={`/itinerary/[id]/addMeal`} as={`/itinerary/${itinerary.id}/addMeal`}>
                        <button className="btn btn-dark">Add Meal</button>
                      </Link>
                      <Link href={`/itinerary/[id]/addAttraction`} as={`/itinerary/${itinerary.id}/addAttraction`}>
                        <button className="btn btn-dark">Add Attraction</button>
                      </Link>
                      <hr />
                    </div>
                  </td>
                </tr>
                <tr className="row">
                  <td>
                    <RenderAttractions attractions={itinerary.attractions} date={date} />
                  </td>
                </tr>
                <tr className="row">
                  <td>
                    <RenderMeals meals={itinerary.meals} date={date} />
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  });
};

export default RenderItinerary;