const FoodCard = ({ food }) => {
  const hasDiscount = Number(food.discount) > 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative">
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
          className="aspect-4/3 w-full object-cover"
        />
        {hasDiscount && (
          <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white sm:text-sm">
            {food.discount}% off
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-sm text-gray-500">{food.category}</p>
        <h3 className="mt-1 text-lg font-semibold leading-snug">{food.name}</h3>

        <p
          className="mt-2 flex items-center gap-1 text-sm"
          aria-label={`Rated ${food.rating} from ${food.reviews} reviews`}
        >
          <span aria-hidden="true">⭐ {food.rating}</span>
          <span aria-hidden="true" className="text-gray-500">
            ({food.reviews})
          </span>
        </p>

        <p className="mt-auto pt-4 text-xl font-bold">${food.price}</p>
      </div>
    </article>
  );
};

export default FoodCard;