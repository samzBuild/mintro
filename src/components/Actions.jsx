import Cart from "./Cart";
import Search from "./Search";
import SignIn from "./SignIn";

const Actions = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-3">
      <Search />
      <Cart />
      {/* On mobile, Sign in lives in the menu panel */}
      <div className="ml-1 hidden sm:block">
        <SignIn text="Sign in" />
      </div>
    </div>
  );
};

export default Actions;