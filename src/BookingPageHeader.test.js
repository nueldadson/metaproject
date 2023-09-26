/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

describe("Booking Form", () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Online");
    expect(headingElement).toBeInTheDocument();
  });
});
