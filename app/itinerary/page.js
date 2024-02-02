'use client'
import { useSelector } from "react-redux";

const findLengthOfTrip = () => {

}

const getSpelledOutDate = (dateString) => {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}


const RenderItinerary = () => {
  const trips = useSelector((state) => state.trips.trips);
  console.log(trips);

  return trips.map((itinerary) => (
    <div key={itinerary.id}>
      <h2>Itinerary for {itinerary.city}, {itinerary.state}</h2>
      <p>Hotel: {itinerary.hotel.name} at {itinerary.hotel.address}</p>
      <br/>
      <table key={itinerary.id} className="row">
        <tbody>
          <tr className="row">
            <td className="d-flex justify-content-between">
              <div>{getSpelledOutDate(itinerary.startDate)}</div>
              <div>
                <button>Add Meal</button>
                <button>Add Attraction</button>
              </div>
            </td>
          </tr>
          <tr className="row">
            <td className="col-md-6">{itinerary.attraction.name}</td>
            <td className="col-md-6">{itinerary.attraction.startTime} - {itinerary.attraction.endTime}</td>
          </tr>
          <tr className="row">
            <td className="col-md-6">
              {itinerary.meals.map((meal) => (
                <div key={meal.id} className="row">
                  <span className="col-md-6">{meal.name}</span>
                  <span className="col-md-6">{meal.startTime} - {meal.endTime}</span>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
};

export default RenderItinerary;