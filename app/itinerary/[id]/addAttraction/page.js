'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const AddAttraction = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips.trips);
  console.log(trips[0])
  return (
    <div>{trips[0].id}</div>
  )
}

export default AddAttraction