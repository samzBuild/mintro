import SignIn from "../components/SignIn";
import heroImage from "../assets/images/hero-image.png";
import pizza from "../assets/images/pizza-home.jpg";

const Hero = () => {
  return (
    <section className="w-ful overflow-hidde">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-32">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-500 sm:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 512 512"
              className="fill-orange-500"
              aria-hidden="true"
            >
              <polygon points="352.188,0 131.781,290.125 224.172,290.125 148.313,512 380.219,223.438 284.328,223.438" />
            </svg>
            Fast · Fresh · Reliable
          </span>

          <h1 className="mt-6 text-4xl capitalize font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl xl:leading-[1.05]">
            Delicious food,{" "}
            <span className="text-orange-500">delivered fast</span> to your
            door
          </h1>

          <p className="mt-6 max-w-xl text-lg text-black/70 sm:text-xl">
            Craving something tasty? We deliver your favorite meals hot and
            fresh, in no time.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <SignIn text="Order Now" />
            <SignIn text="Watch Video" />
          </div>

          <div className="mt-10 w-full border-t border-white/10 pt-6">
            <p className="text-lg font-semibold sm:text-xl">
              10k+ happy customers
            </p>
            <p
              className="mt-1 text-base text-gray-300"
              aria-label="Rated 4.6 out of 5"
            >
              <span aria-hidden="true">⭐⭐⭐⭐⭐</span> (4.6)
            </p>
          </div>
        </div>

        {/* Right: image with floating cards */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <img
            src={heroImage}
            alt="A freshly prepared meal ready for delivery"
            className="h-auto w-96 object-contain"
          />

          {/* Delivery time card */}
          <div className="absolute left-0 top-4 flex items-center gap-4 rounded-xl bg-white p-3 text-black shadow-2xl sm:-left-6 sm:top-8 sm:gap-6 sm:p-4">
            <div>
              <p className="text-xs font-semibold text-gray-600 sm:text-sm">
                Delivery time
              </p>
              <p className="text-lg font-bold sm:text-2xl">20-30 mins</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="h-8 w-8 shrink-0 sm:h-10 sm:w-10"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7 3V8.41421L10.2929 11.7071L11.7071 10.2929L9 7.58579V3H7Z"
                fill="#FF6900"
              />
            </svg>
          </div>

          {/* Offer card */}
          <div className="absolute bottom-4 right-0 z-10 flex items-center gap-3 rounded-xl bg-white p-3 text-black shadow-2xl sm:-right-6 sm:bottom-8 sm:gap-4 sm:p-4">
            <img
              src={pizza}
              alt=""
              className="h-12 w-12 rounded-lg object-cover sm:h-14 sm:w-14"
            />
            <p className="text-sm font-bold leading-snug sm:text-lg">
              <span className="text-xl font-extrabold text-orange-500 sm:text-2xl">
                50%
              </span>{" "}
              off
              <br />
              your first order
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
