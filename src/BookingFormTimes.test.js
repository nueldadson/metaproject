/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent, act } from "@testing-library/react";
import BookingForm from './components/BookingForm';

describe("Booking Form", () => {
    
  test('Shows available times after selecting a date', () => {
    render(<BookingForm availableTimes={["10:00 AM", "12:00 PM", "2:00 PM"]} />);
    const dateInput = screen.getByLabelText("Choose date");

    act(() => {
      // Select a date
      fireEvent.change(dateInput, { target: { value: "2023-06-15" } });
    });

    // Check if the available times are displayed
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toBeInTheDocument();
    const timeOptions = screen.getAllByRole("option");
    expect(timeOptions).toHaveLength(3); // Assuming there are 3 available times
  });

  // test('Submits the form with selected date and time', () => {
  //   const submitForm = jest.fn();
  //   render(<BookingForm availableTimes={["10:00 AM"]} submitForm={submitForm} />);
  //   const dateInput = screen.getByLabelText("Choose date");
  //   const timeSelect = screen.getByLabelText("Choose time");
  //   const submitButton = screen.getByText("Submit");

  //   act(() => {
  //     // Select a date and time
  //     fireEvent.change(dateInput, { target: { value: "2023-06-15" } });
  //     fireEvent.change(timeSelect, { target: { value: "10:00 AM" } });
  //   });

  //   act(() => {
  //     // Submit the form
  //     fireEvent.click(submitButton);
  //   });

  //   // Check if the form data is submitted
  //   expect(submitForm).toHaveBeenCalledWith({
  //     resfirstName: '',
  //     resLastName: '',
  //     resDate: '2023-06-15',
  //     resTime: '10:00 AM',
  //     guests: '1',
  //     occasion: '',
  //   });
  // });

});
