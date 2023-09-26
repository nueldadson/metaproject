import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage';

function App() {

  const seededRandom = function (seed) {
      var m = 2**35 - 31;
      var a = 185852;
      var s = seed % m;
      return function () {
          return (s = s * a % m) / m;
      };
  }

  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };
  const submitAPI = function(formData) {
      return true;
  };

  const initialState = {availableTimes:  fetchAPI(new Date())}
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
      return {availableTimes: fetchAPI(new Date(date))}
  }
  const navigate = useNavigate();
  
  function submitForm (formData) {
      if (submitAPI(formData)) {
          navigate("/confirm-booking")
      }
  }

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/booking-page" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
      <Route path="/confirm-booking" element={<ConfirmedBookingPage />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
}

export default App;
