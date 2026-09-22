import SignIn from "../components/SignIn";
import heroImage from "../assets/images/hero-image.png";
import pizza from "../assets//images/pizza-home.jpg";

const Hero = () => {
  return (
    <div className="flex justify-between h-screen pt-50 px-20">
      {/* left main container */}
      <div className="w-[40%]">
        <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full flex justify-center items-center w-fit font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="_x32_"
            width="20px"
            height="20px"
            viewBox="0 0 512 512"
            xml:space="preserve"
            className="inline fill-orange-300"
          >
            <g>
              <polygon
                class="st0"
                points="352.188,0 131.781,290.125 224.172,290.125 148.313,512 380.219,223.438 284.328,223.438  "
              />
            </g>
          </svg>
          Fast - Fresh - Reliable
        </span>

        <h1 className="text-7xl font-bold mt-4 leading-18 ">
    
          Delicious Food, <br />
          <span className="text-orange-500">Delivered Fast</span> <br /> To your
          Door
        </h1>
        <p className="text-3xl mt-10">
          Craving Something Tasty? We Deliver your <br /> favorite meals hot,
          fresh and no time
        </p>
        <div className="flex gap-4 mt-6">
          <SignIn text="Order Now" />
          <SignIn text="Watch Video" />
        </div>
        <div className="mt-6 text-2xl">
          <p>10k+ Happy Customers</p>
          <span>⭐⭐⭐⭐⭐(4.6)</span>
        </div>
      </div>
      {/* Right main container */}
      <div className="relative w-[60%] flex items-center justify-center">
          <img src={heroImage} alt="" srcset="" className="w-sm absolute bottom-15" />
        <div className="bg-white flex justify-center items-center gap-8 w-fit p-4 rounded-xl absolute bottom-70 left-60 shadow-2xl shad">
          <div>
            <p className="font-bold">Delivery Time</p>
            <p className="text-2xl font-bold">20-30 mins</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7 3V8.41421L10.2929 11.7071L11.7071 10.2929L9 7.58579V3H7Z"
              fill="#FF6900"
            />
          </svg>
        </div>

        <div className="z-100 flex items-center justify-center gap-4 bg-white p-4 rounded-xl absolute bottom-30 right-50 shadow-2xl">
          <div className="w-15 h-15">
            <img src={pizza} alt=""  className="rounded-lg"/>
          </div>
          <p className="text-xl font-bold"><span className="text-orange-500 font-extrabold text-2xl">50% </span>OFF<br />on your first order</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;  
