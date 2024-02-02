"use client";
import { createSlice } from "@reduxjs/toolkit";

export const tripsSlice = createSlice({
  name: "trips",
  initialState: {
    trips: [
      {
        id: 2341234,
        city: "Boston",
        state: "MA",
        country: "USA",
        startDate: "2020-06-01",
        endDate: "2020-06-03",
        hotel: {
          name: "Marriott",
          address: "1000 Boylston St, Boston, MA 02116",
          lat: 42.346741,
          lon: -71.078049,
          rating: 4,
          link: "https://www.marriott.com/hotels/travel/bosco-boston-marriott-copley-place/",
        },
        meals: [
          {
            id: 12345,
            name: "breakfast",
            startTime: "8:00am",
            endTime: "9:00am",
            date: "2020-06-01",
          },
          {
            id: 12346,
            name: "lunch",
            startTime: "12:00pm",
            endTime: "1:00pm",
            date: "2020-06-01",
          },
          {
            id: 12347,
            name: "dinner",
            startTime: "6:00pm",
            endTime: "7:00pm",
            date: "2020-06-01",
          },
        ],
        attraction: {
          id: 1234,
          name: "Fenway Park",
          startTime: "10:00",
          endTime: "12:00",
          distance: 2,
          rating: 5,
          address: "4 Yawkey Way, Boston, MA 02215",
          link: "https://www.mlb.com/redsox/ballpark",
        },
      },
    ],
  },
  reducers: {
    addAttraction: (state, action) => {
      state.trips[0].attraction = action.payload;
    },
  },
});

export default tripsSlice.reducer;
