import { initializeTimes, updateTimes } from "./bookingUtils";

test("initializeTimes returns expected times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns same times for now", () => {
  const currentTimes = ["17:00", "18:00", "19:00"];
  const newState = updateTimes(currentTimes, { type: "update", date: "2025-07-10" });
  expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
