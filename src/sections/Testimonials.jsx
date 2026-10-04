
import { useState } from "react";
import GirlFoodie from "../assets/images/girl-foodie.png";

const reviews = [
  {
    review: "Best and High-Quality Food",
    name: "Alex",
    rating: 4.9,
  },
  {
    review: "Value for money food. Best in town",
    name: "Max",
    rating: 4.8,
  },
  {
    review: "Great ambience, outstanding place overall",
    name: "Lion",
    rating: 5.0,
  },
];

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const review = reviews[currentReview];

  const nextReview = () => {
    setCurrentReview((currentReview + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentReview(
      (currentReview - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section className="flex justify-between items-center gap-10 px-10">
      {/* Image */}
      <div className="relative">
        <img
          src={GirlFoodie}
          alt="foodie-girl"
          width="300px"
        />

        <div className="absolute right-0 bottom-0 bg-white p-2 rounded-md text-center">
          <p>Our happy customers</p>
          <p className="font-bold text-2xl">12K+</p>
        </div>
      </div>

      {/* Testimonial content */}
      <div className="mx-auto">
        <h3 className="capitalize text-orange-500">
          What our customers say about us
        </h3>

        <h4 className="capitalize text-4xl font-semibold tracking-tight">
          Loved by thousands of foodies
        </h4>

        {/* Review */}
        <div className="mt-8">
          <p className="text-xl left-animation">
            "{review.review}"
          </p>

          <p className="mt-3 font-semibold">
            {review.name}
          </p>

          <p className="mt-1">
            ⭐ {review.rating}
          </p>
        </div>
      </div>

      {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={previousReview}
            className="border px-4 py-2 rounded"
          >
            ←
          </button>

          <button
            onClick={nextReview}
            className="border px-4 py-2 rounded"
          >
            →
          </button>
        </div>
    </section>
  );
};

export default Testimonials;
