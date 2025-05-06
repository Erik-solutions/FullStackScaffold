import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Bolt,Building2,CirclePlus,LogIn} from "lucide-react";
import { is } from "drizzle-orm";
//import Login from "@/authentication/Login";

interface HeaderProps {
  onLoginToggle: () => void;
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginToggle,onRegisterClick }) => {

  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  
  

  return (
    <div>
    <div className= "page_header flex justify-between px-8 ">
    <span className="flex w-[30%] items-center h-[4rem] "><Building2 className="pr-2 w-[3rem] h-[3rem] text-[#4D55CC]"/> 
    <h1>BusinessOs</h1></span>

    <span className="flex w-[20%] justify-evenly items-center">
       <button className="w-[40%] h-[2.6rem] flex items-center px-2 rounded-lg border bg-white text-[#2D336B]"
       onClick={onRegisterClick}> 
       <CirclePlus className="pr-2"/>Register</button>
    <button className="w-[40%] h-[2.6rem] flex items-center px-2 rounded-lg border bg-[#4D55CC] text-[#FBFBFB] "
    onClick={onLoginToggle}>
        <LogIn className="pr-2" />Login</button></span>
       
       </div>   

       <div className="flex flex-col motive__container text-center my-[4rem]">
           <h1 className="font-bold text-[3rem] mb-2">Empower Your Business Growth</h1>
           <h3 className="text-gray-500 mb-4">All-in-one platfrom for managing your business operations, customer <br />
           relationships, and team colaboration</h3>

           <span className="flex justify-evenly items-center w-[20%] self-center mt-4"> 
               <button className="w-[40%] h-[2.6rem] flex items-center px-2 rounded-lg border bg-[#4D55CC] text-[#FBFBFB] "
               >Get Started</button> 
               <button className="w-[40%] font-normal h-[2.6rem] flex items-center px-2 rounded-lg border bg-white text-[#2D336B]">
                    Watch Demo</button></span>
       </div> </div>
  );
}

export default Header;