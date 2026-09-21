import Actions from "../components/Actions";
import Logo from "../components/Logo";

const Navbar = () => {
  return (
    <header className="flex w-screen">
      <div className= "flex items-center justify-between w-full mx-auto px-20 py-5">
        <Logo />
        <nav>
          <ul className="flex items-center gap-12 text-xl font-medium">
            <li>
              <a href="#home" className="hover:text-orange-500">Home</a>
            </li>
            <li>
              <a href="#menu" className="hover:text-orange-500">Menu</a>
            </li>
            <li>
              <a href="#works" className="hover:text-orange-500">How it works</a>
            </li>
            <li>
              <a href="#offers" className="hover:text-orange-500">Offers</a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-500">About Us</a>
            </li>
          </ul>
        </nav>
        <Actions />
      </div>
    </header>
    
  );
};

export default Navbar;
