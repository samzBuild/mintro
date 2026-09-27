const FoodCard = ({ food }) => {
  return (
    <div className="w-72 shrink-0 bg-white rounded-2xl shadow-sm overflow-hidden">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{food.name}</h3>

        <p className="text-sm text-gray-500 mt-1">{food.category}</p>

        <div className="flex items-center gap-1 mt-3">
          <span>⭐ {food.rating}</span>
          <span className="text-sm text-gray-500">({food.reviews})</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold">${food.price}</span>

          <span className="text-sm font-medium">{food.discount}% OFF</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
