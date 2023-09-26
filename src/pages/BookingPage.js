import React from 'react';
import BookingForm from '../components/BookingForm';
import Header from '../components/Header';
import BookingTopSection from '../components/BookingTopSection';
import Interior from '../components/Interior';
import About from '../components/About';
import Footer from '../components/Footer';
import { AlertProvider } from "../context/alertContext";

const BookingPage = (props) => {

  return (
    <div>
       <AlertProvider>
            <Header />
            <BookingTopSection />
            <BookingForm 
              availableTimes={props.availableTimes} 
              dispatch={props.dispatch} 
              submitForm={props.submitForm}
            />
            <About />
            <Interior />
            <Footer />
      </AlertProvider>
    </div>
  );
};

export default BookingPage;