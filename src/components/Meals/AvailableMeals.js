import { useState } from "react";

import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import FeaturedImg1 from "../../assets/products/dog-bed.jpg";
import FeaturedImg2 from "../../assets/products/dog-bowl.jpg";
import FeaturedImg3 from "../../assets/products/dog-collar.jpg";
import FeaturedImg4 from "../../assets/products/dog-chew-toy.jpg";
import FeaturedImg5 from "../../assets/products/dog-treats.jpg";

const DogProducts = [
  {
    id: "dp-1",
    name: "Cozy Dog Bed",
    description: "Soft & Durable",
    price: 1200,
    featured: FeaturedImg1,
  },
  {
    id: "dp-2",
    name: "Dog Feeding Bowl",
    description: "Sturdy & Safe",
    price: 300,
    featured: FeaturedImg2,
  },
  {
    id: "dp-3",
    name: "Adjustable Dog Collar",
    description: "Comfortable & Stylish",
    price: 450,
    featured: FeaturedImg3,
  },
  {
    id: "dp-4",
    name: "Tough Chew Toy",
    description: "Durable & Fun",
    price: 350,
    featured: FeaturedImg4,
  },
  {
    id: "dp-5",
    name: "Natural Dog Treats",
    description: "Tasty & Healthy",
    price: 250,
    featured: FeaturedImg5,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul className={classes.meal_list}>
        {DogProducts.map((item) => {
          return (
            <MealItem
              key={item.id}
              id={item.id}
              featured={item.featured}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
