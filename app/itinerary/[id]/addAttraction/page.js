'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const AddAttraction = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips.trips);
  return (
    <div className='w-100 d-flex justify-content-center align-items-center'>
      <div className="searchbar d-flex w-100 justify-content-center align-items-center">
        <input className='form-control search mx-3 w-50'></input>
        <button className='btn btn-primary searchButton'>Search</button>
      </div>
    </div>
  )
}

export default AddAttraction