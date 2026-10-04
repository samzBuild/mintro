const ChooseCard = ({ animation, heading, para }) => {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm sm:p-8">
      <img
        src={animation}
        alt=""
        className="h-24 w-24 object-contain sm:h-28 sm:w-28"
      />
      <h3 className="mt-6 text-xl font-bold sm:text-2xl">{heading}</h3>
      <p className="mt-2 max-w-xs text-base text-gray-600 sm:text-lg">{para}</p>
    </div>
  );
};

export default ChooseCard;