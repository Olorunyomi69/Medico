import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav =() =>{
    setIsOpen(!isOpen);
  }
  return (
    <header className="mx-auto fixed w-full z-10 transition-all px-4 py-4 md:px-8  bg-[#ffff] shadow-lg">
      <div className="container mx-auto  h-full">
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="text-3xl text-[#304e21] font-normal">Medico</h1>
          </div>

          
      <OutsideClickHandler onOutsideClick={()=> { setIsOpen(false)}} >
      <div className={`absolute top-6 right-4 p-4 w-fit bg-white shadow-md z-20 transform rounded-lg ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden ${!isOpen && 'hidden'}`}>
            <Link to="/" className="block py-2 px-4 text-black ">Home</Link>
            <Link to="/about" className="block py-2 px-4 text-black ">About us</Link>
            <Link to="/services" className="block py-2 px-4 text-black ">Services</Link>
            <a href="/" className="block py-2 px-4 text-black ">Reviews</a>
            <Link to="/auth" className="block py-2 px-4 text-black rounded-xl bg-[#e2c2e6]">Get Started</Link>
          </div>
      </OutsideClickHandler>
      
      <button  className="md:hidden" onClick={toggleNav}>
          <MenuIcon/>
      </button>
          

          <div className="items-center hidden space-x-8 md:flex">
            <Link to={""} className="hover:border-b px-4 hover:border-[#000]">
              Home
            </Link>
            <Link
              to={"about"}
              className="hover:border-b px-4 hover:border-[#000]"
            >
              About us
            </Link>
            <Link
              to={"services"}
              className="hover:border-b px-4 hover:border-[#000]"
            >
              Services
            </Link>
            <a href={"/"} className="hover:border-b px-4 hover:border-[#000]">
              Reviews
            </a>
          </div>
          <Link
            to={"auth"}
            className="hidden md:block rounded-xl bg-[#e2c2e6] py-3 px-6 text-black"
          >
            <button>Get Started</button>
          </Link>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
