import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockDispatch = jest.fn();

test("Date input has required attribute", () => {
  render(<BookingForm availableTimes={[]} dispatch={mockDispatch} />);
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("required");
});

test("Guests input has min=1 and max=10", () => {
  render(<BookingForm availableTimes={[]} dispatch={mockDispatch} />);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("Time select is disabled if no available times", () => {
  render(<BookingForm availableTimes={[]} dispatch={mockDispatch} />);
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toBeDisabled();
});
