import React from "react";

const testimonials = [
  {
    name: "Olivia",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment: "Amazing food and great service. Will come back for sure!"
  },
  {
    name: "Ethan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    comment: "The Greek salad was so fresh! Loved the atmosphere too."
  },
  {
    name: "Sofia",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    comment: "Best lemon dessert I’ve ever had!"
  }
];

function CustomersSay() {
  return (
    <section>
      <h2>What Our Customers Say</h2>
      <div className="testimonials">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial">
            <img src={t.image} alt={t.name} />
            <h4>{t.name}</h4>
            <p>{"⭐".repeat(t.rating)}</p>
            <q>{t.comment}</q>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
