import SignIn from "../components/SignIn";

const Hero = () => {
  return (
    <div>
      {/* left main container */}
      <div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="_x32_"
            width="800px"
            height="800px"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <polygon
                class="st0"
                points="352.188,0 131.781,290.125 224.172,290.125 148.313,512 380.219,223.438 284.328,223.438  "
              />
            </g>
          </svg>
          Fast - Fresh - Relaiable
        </span>

        <h1> Delicious Food, Delivered Fast To your Door </h1>
        <p>Craving Soemthing Tasty? We Deliver your favorite meals hot, fresh and no time</p>
        <div>
            <SignIn text="Order Now"/>
            <SignIn text="Watch Video"/>
        </div>


      </div>
      {/* Right main container */}
      <div></div>
    </div>
  );
};

export default Hero;
