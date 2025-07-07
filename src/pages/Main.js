import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";

// Функция для генерации времени (можно заменить на API позже)
const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00"];

// Редьюсер (пока возвращает одинаковый список)
const updateTimes = (state, action) => {
  if (action.type === "update" && action.date) {
    // Тут можно динамически менять список по дате
    return initializeTimes();
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;
