export const fetchAPI = (date) => {
  const result = [];
  const random = Math.floor(Math.random() * 5);
  for (let i = 17; i <= 21; i++) {
    if ((i + random) % 2 === 0) {
      result.push(`${i}:00`);
    }
  }
  return result;
};

export const submitAPI = (formData) => {
  console.log("Submitting", formData);
  return true; // или false для симуляции ошибки
};
