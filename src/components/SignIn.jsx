const variants = {
  primary:
    "bg-orange-500 text-white hover:bg-orange-600 border border-orange-500 hover:border-orange-600",
  secondary:
    "bg-transparent text-white border border-white/30 hover:bg-white/10",
};

const SignIn = ({ text, variant = "primary", onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full rounded-lg px-8 py-3 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 sm:w-auto sm:text-lg ${variants[variant]} cursor-pointer `}
    >
      {text}
    </button>
  );
};

export default SignIn;