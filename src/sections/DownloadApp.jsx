import SignIn from "../components/SignIn";
// Replace with your real phone/app mockup image
import appImage from "../assets/images/app-mockup.png";

const stores = [
  { href: "#", small: "Get it on", name: "Google Play" },
  { href: "#", small: "Download on the", name: "App Store" },
];

const DownloadApp = () => {
  return (
    <section
      id="offers"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-black p-8 text-white sm:p-12 lg:grid-cols-2 lg:gap-8 lg:p-16">
        {/* Copy */}
        <div className="flex flex-col items-start">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500 sm:text-base">
            Download our app
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Get exclusive offers on the Zesty app
          </h2>
          <p className="mt-4 max-w-md text-base text-gray-300 sm:text-lg">
            Download now and enjoy special discounts, fast delivery and easy
            order tracking.
          </p>

          <div className="mt-8 w-full sm:w-auto">
            <SignIn text="Download the app" />
          </div>

          <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            {stores.map(({ href, small, name }) => (
              <a
                key={name}
                href={href}
                className="flex flex-col rounded-lg border border-white/30 px-5 py-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
              >
                <span className="text-xs text-gray-300">{small}</span>
                <span className="text-lg font-semibold leading-tight">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Image */}
        <img
          src={appImage}
          alt="The Zesty app on a phone"
          loading="lazy"
          className="mx-auto h-auto w-full max-w-xs object-contain lg:max-w-sm lg:justify-self-center"
        />
      </div>
    </section>
  );
};

export default DownloadApp;