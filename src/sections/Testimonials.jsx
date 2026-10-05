import { useState } from "react";
import GirlFoodie from "../assets/images/girl-foodie.png";

const reviews = [
  {
    review: "Best and high-quality food",
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

  const nextReview = () =>
    setCurrentReview((current) => (current + 1) % reviews.length);

  const previousReview = () =>
    setCurrentReview(
      (current) => (current - 1 + reviews.length) % reviews.length
    );

  const buttonClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-lg transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

  return (
    <section className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <img
            src={GirlFoodie}
            alt="A happy customer enjoying her meal"
            className="h-auto w-full object-contain"
          />

          <div className="absolute bottom-2 right-0 rounded-xl bg-white px-4 py-3 text-center shadow-2xl sm:-right-4 sm:bottom-6">
            <p className="text-xs text-gray-600 sm:text-sm">
              Our happy customers
            </p>
            <p className="text-2xl font-bold sm:text-3xl">12K+</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500 sm:text-base">
            What our customers say
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Loved by thousands of foodies
          </h2>

          {/* Review (min height stops the buttons jumping between reviews) */}
          <figure
            key={currentReview}
            aria-live="polite"
            className="left-animation mt-8 min-h-40 sm:mt-10"
          >
            <blockquote className="text-xl sm:text-2xl">
              “{review.review}”
            </blockquote>
            <figcaption className="mt-4">
              <p className="font-semibold">{review.name}</p>
              <p className="mt-1 text-sm text-gray-700">
                ⭐ {review.rating.toFixed(1)}
              </p>
            </figcaption>
          </figure>

          {/* Controls */}
          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={previousReview}
              aria-label="Previous review"
              className={buttonClass}
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextReview}
              aria-label="Next review"
              className={buttonClass}
            >
              →
            </button>
            <span className="ml-2 text-sm text-gray-600">
              {currentReview + 1} / {reviews.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;