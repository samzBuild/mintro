import { useState } from "react";
import FoodCard from "../components/FoodCard";
import FoodData from "../components/FoodData";

// `value` must match the `category` field in FoodData. `label` is what people see.
const categories = [
  { label: "All", value: "All" },
  { label: "Burgers", value: "Burgers" },
  { label: "Pizza", value: "Pizza" },
  { label: "Asian", value: "Asian" },
  { label: "Desserts", value: "Desserts" },
  { label: "Drinks", value: "Drinks" },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFood =
    selectedCategory === "All"
      ? FoodData
      : FoodData.filter((food) => food.category === selectedCategory);

  return (
    <section
      id="menu"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mb-8 lg:mb-12">
        <p className="text-sm font-bold uppercase tracking-wider text-orange-500 sm:text-base">
          Explore our menu
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          Tasty food you'll love
        </h2>
      </div>

      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
        {/* Categories: scrollable pills on mobile, vertical list on desktop */}
        <div
          role="group"
          aria-label="Food categories"
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {categories.map(({ label, value }) => {
            const active = selectedCategory === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setSelectedCategory(value)}
                aria-pressed={active}
                className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 lg:rounded-md lg:text-left lg:text-xl ${
                  active
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-100 hover:text-orange-500"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Food grid */}
        {filteredFood.length > 0 ? (
          <div className="flex shrink-0 overflow-x-scroll gap-8">
            {filteredFood.map((food) => (
              <FoodCard food={food} key={food.id} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-gray-600">
            Nothing in this category yet. Try another one.
          </p>
        )}
      </div>
    </section>
  );
};

export default Menu;