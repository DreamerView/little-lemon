import React, { useState } from "react";
import { submitAPI } from "../utils/api"; // Убедись, что импорт корректен

const BookingForm = ({ availableTimes, dispatch }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [isTouched, setIsTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (id === "date") {
      dispatch({ date: new Date(value) });
    }
  };

  const isFormValid =
    formData.date &&
    formData.time &&
    Number(formData.guests) >= 1 &&
    formData.occasion;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsTouched(true);

    if (isFormValid) {
      const success = submitAPI(formData);
      if (success) {
        setSubmitted(true);
        alert("Reservation submitted successfully!");
        // Optionally reset form here
      } else {
        alert("Submission failed. Try again.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "16px" }}
    >
      <h2>Book a Table</h2>

      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={formData.time}
        onChange={handleChange}
        required
        disabled={!availableTimes || availableTimes.length === 0}
      >
        <option value="">Select a time</option>
        {availableTimes?.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" disabled={!isFormValid && isTouched}>
        Submit reservation
      </button>

      {submitted && <p style={{ color: "green" }}>✔ Reservation sent!</p>}
    </form>
  );
};

export default BookingForm;
