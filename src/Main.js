import { useReducer } from "react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./utils/bookingUtils";

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;
