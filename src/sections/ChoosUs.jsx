import ChooseCard from "../components/ChooseCard";
import rider from "../assets/images/rider.png";
import bowl from "../assets/images/bowl.png";
import top from "../assets/images/top.png";

const features = [
  {
    animation: rider,
    heading: "Lightning fast",
    para: "Super quick delivery right at your door",
  },
  {
    animation: bowl,
    heading: "Wide variety",
    para: "Choose from a wide range of cuisines and dishes",
  },
  {
    animation: top,
    heading: "Top quality",
    para: "We use the freshest ingredients for the best taste",
  },
];

const ChooseUs = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-orange-500 sm:text-base">
          Why choose us
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tighter text-balance sm:text-4xl lg:text-5xl">
          Your favourite food delivery partner
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-3 lg:mt-16 lg:gap-8">
        {features.map((feature) => (
          <ChooseCard key={feature.heading} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;