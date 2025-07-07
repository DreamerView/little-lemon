import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Заглушка пропсов
const mockProps = {
  availableTimes: ["17:00", "18:00", "19:00"],
  dispatch: jest.fn(),
};

test("Renders the BookingForm heading", () => {
  render(<BookingForm {...mockProps} />);
  const headingElement = screen.getByLabelText(/Choose date/i);
  expect(headingElement).toBeInTheDocument();
});
