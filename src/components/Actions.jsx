import Cart from "./Cart";
import Search from "./Search";
import SignIn from "./SignIn";

const Actions = () => {
  return (
    <div className="flex gap-6 items-center ">
      <Search />
      <Cart />
      <SignIn text="Sign in"/>
    </div>
  );
};

export default Actions;
