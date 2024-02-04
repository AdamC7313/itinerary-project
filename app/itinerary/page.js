'use client'
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";


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

const RenderMeals = () => {
  const meals = useSelector((state) => state.trips.trips[0].meals);
  // console.log(meals);

  return meals.map((meal) => (
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


const RenderItinerary = () => {
  const trips = useSelector((state) => state.trips.trips);
  // console.log(trips);

  return trips.map((itinerary) => {
    const dateRange = findLengthOfTrip(itinerary.startDate, itinerary.endDate)
    console.log(dateRange);

    return (
    <div key={itinerary.id}>
      <h2>Itinerary for {itinerary.city}, {itinerary.state}</h2>
      <p>Hotel: {itinerary.hotel.name} at {itinerary.hotel.address}</p>
      <br/>
      <table className="row">
        <tbody>
          <tr className="row">
            <td className="col-md-8">
              <div><strong>{getSpelledOutDate(itinerary.startDate)}</strong></div>
              <div>
                <Link href={`/app/itinerary/[id]/addMeal`} as={`/app/itinerary/${itinerary.id}/addMeal`}>
                  <button className="btn btn-dark">Add Meal</button></Link>
                <Link href={`/app/itinerary/[id]/addAttraction`} as={`/app/itinerary/${itinerary.id}/addAttraction`}><button className="btn btn-dark">Add Attraction</button></Link>
                <hr/>
              </div>
            </td>
          </tr>
          <tr className="row">
            <td className="col-md-6">{itinerary.attraction.name}</td>
            <td className="col-md-6">{itinerary.attraction.startTime} - {itinerary.attraction.endTime}</td>
          </tr>
          <tr className="row">
            <td><RenderMeals/></td>
          </tr>
       </tbody>
      </table>
    </div>
  )});
};

export default RenderItinerary;