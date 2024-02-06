'use client';
import { useParams } from 'next/navigation';
import { getTrip } from '../../../store/slices/trips';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const AddAttraction = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const trips = useSelector((state) => state.trips.trips);
  
  const trip = trips.find((trip) => trip.id === parseInt(id));

  return (
    <div className='w-100 text-center d-flex flex-column justify-content-center align-items-center'>
    <h1>Add Attraction for {trip.city}</h1>
    <div className='w-100 d-flex justify-content-center align-items-center'>
      <div className="searchbar d-flex w-100 justify-content-center align-items-center">
        <input className='form-control search mx-3 w-50'></input>
        <button className='btn btn-primary searchButton'>Search</button>
      </div>
    </div>
    <table className='table w-75 mt-5'>
        <thead>
          <tr>
            <th>Attraction</th>
            <th>Distance from Hotel</th>
            <th>Address</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Hi</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AddAttraction