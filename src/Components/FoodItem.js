import { CaretRight } from "phosphor-react";

export default function FoodItem({ data }) {
  const { name, calories } = data;
 
  return (
    <div className="food-item">
      <div className="food-item-name">{name}</div>
      <div className="food-item-calories">{calories} <span>cal</span></div>
      <CaretRight className="food-item-arrow" size={18} weight={"bold"} color="lightgrey" />
    </div>
  )
}