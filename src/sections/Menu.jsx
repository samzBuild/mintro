import FoodCard from "../components/FoodCard";
import FoodData from "../components/FoodData";
import { useState } from "react";

const Menu = () => {
  let menuBtns = [
    {
      icon: "",
      itemName: "All",
    },
    {
      icon: "Burger",
      itemName: "Burgers",
    },
    {
      icon: "Pizza",
      itemName: "Pizza",
    },
    {
      icon: "Asian",
      itemName: "Asian",
    },
    {
      icon: "Desserts",
      itemName: "Desserts",
    },
    {
      icon: "Drinks",
      itemName: "Drinks",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFood = selectedCategory === "All"
  ? FoodData
  : FoodData.filter(
      (food) => food.category === selectedCategory
    );

  return (
    <div className="mt-15">
      <div className="pl-40 mb-15">
      <h1 className="text-orange-500 text-2xl">Explore Our Menu</h1>
      <p className="text-4xl">Tasty Food You'll Love</p>
      </div>

      <div className="w-full flex justify-between">

        <div className="w-[30%] flex flex-col justify-around px-40">
          {menuBtns.map((items) => {
            return (
              <button
              className= "cursor-pointer rounded-md text-2xl py-2 hover:text-white hover:bg-orange-500"
              key={items.itemName}
              onClick={()=>setSelectedCategory(items.itemName)}
              >
                {items.itemName}
                </button>
            );
          })}
        </div>

        <div className="w-[70%] flex gap-6 overflow-x-auto">
          {filteredFood.map( (food)=>(
            <FoodCard food={food} key={FoodData.id}/>
          ) )}
        </div>
      </div>    
    </div>
  );
};

export default Menu;
