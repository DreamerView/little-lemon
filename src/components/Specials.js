import React from "react";

const specialsData = [
  {
    title: "Greek Salad",
    description: "Crispy lettuce, olives, feta cheese and our house dressing.",
    price: "$12.99",
    image: "https://source.unsplash.com/400x300/?greek,salad"
  },
  {
    title: "Bruschetta",
    description: "Grilled bread with tomato, garlic and basil topping.",
    price: "$8.99",
    image: "https://source.unsplash.com/400x300/?bruschetta"
  },
  {
    title: "Lemon Dessert",
    description: "Refreshing lemon mousse served with mint and cream.",
    price: "$5.99",
    image: "https://source.unsplash.com/400x300/?lemon,dessert"
  }
];

function Specials() {
  return (
    <section>
      <h2>Our Specials</h2>
      <div className="specials-grid">
        {specialsData.map((item, index) => (
          <div key={index} className="special-card">
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>{item.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
