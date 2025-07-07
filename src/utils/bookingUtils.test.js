// src/utils/bookingUtils.test.js

import { initializeTimes, updateTimes } from './bookingUtils';
import * as api from './api'; // Импортируем весь модуль для мокинга

describe('Booking utilities', () => {
  beforeEach(() => {
    jest.resetAllMocks(); // Чистим моки перед каждым тестом
  });

  test('initializeTimes returns available times from API', () => {
    const mockedTimes = ['17:00', '18:00', '19:00'];
    jest.spyOn(api, 'fetchAPI').mockReturnValue(mockedTimes);

    const result = initializeTimes();
    expect(result).toEqual(mockedTimes);
    expect(api.fetchAPI).toHaveBeenCalledTimes(1);
  });

  test('updateTimes returns updated times from API using dispatched date', () => {
    const mockedTimes = ['20:00', '21:00'];
    jest.spyOn(api, 'fetchAPI').mockReturnValue(mockedTimes);

    const testAction = { date: new Date('2023-07-07') };
    const result = updateTimes([], testAction);
    expect(result).toEqual(mockedTimes);
    expect(api.fetchAPI).toHaveBeenCalledWith(testAction.date);
  });
});
