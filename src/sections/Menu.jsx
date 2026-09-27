import FoodCard from "../components/FoodCard";
import FoodData from "../components/FoodData";

const Menu = () => {
  let menuBtns = [
    {
      icon: "Burger",
      itemName: "Burger",
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
  return (
    <div className="">
      <h1>Explore Our Menu</h1>
      <p>Tasty Food You'll Love</p>

      <div className="w-full flex justify-between">

        <div className="w-full flex flex-col">
          {menuBtns.map((items) => {
            return (
              <button className= "cursor-pointer rounded-md text-lg">{items.itemName}</button>
            );
          })}
        </div>

        <div className="w-full flex gap-6 overflow-x-auto">
          {FoodData.map( (food)=>(
            <FoodCard food={food} key={FoodData.id}/>
          ) )}
        </div>
      </div>    
    </div>
  );
};

export default Menu;
