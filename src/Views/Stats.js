import FoodItem from "./../Components/FoodItem";
import SummaryBox from "./../Components/SummaryBox";

const dailyFoodItems = [
  {
    name: "Avocado Toast",
    time: "2022-02-07T10:41:18.742Z",
    calories: 420
  },
  {
    name: "Coffee",
    time: "2022-02-07T10:41:18.742Z",
    calories: 20
  },
  {
    name: "Cheese & Crackers",
    time: "2022-02-07T10:41:18.742Z",
    calories: 50
  },
  {
    name: "Scrambled Eggs & Toast",
    time: "2022-02-07T10:41:18.742Z",
    calories: 120
  }
];

export default function Stats() {
  return (
    <div className="container">
      <div className="title">Stats</div>
      
      <SummaryBox />

      <div className="food-list-title">
        <div>Morning</div>
        <div className="fl-title-calories">400 cal</div>
      </div>
      <div className="food-list">
        {
          dailyFoodItems.map((food, i) => <FoodItem key={i} data={food} />)
        }
      </div>

      <div className="food-list-title">
        <div>Midday</div>
        <div className="fl-title-calories">400 cal</div>
      </div>
      <div className="food-list">
        {
          dailyFoodItems.map((food, i) => <FoodItem key={i} data={food} />)
        }
      </div>

      <div className="food-list-title">
        <div>Afternoon</div>
        <div className="fl-title-calories">400 cal</div>
      </div>
      <div className="food-list">
        {
          dailyFoodItems.map((food, i) => <FoodItem key={i} data={food} />)
        }
      </div>

      <div className="food-list-title">
        <div>Night</div>
        <div className="fl-title-calories">400 cal</div>
      </div>
      <div className="food-list">
        {
          dailyFoodItems.map((food, i) => <FoodItem key={i} data={food} />)
        }
      </div>
    </div>
  );
}