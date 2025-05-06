
import Login from "./authenticationOne/Login";
import Signup from "./authenticationOne/Signup";
import { useState } from "react";

export interface authenticationProps{
  isAuthenticationActive:true|false;
  authType: "login" | "register";
}

const AuthenticationPage: React.FC<authenticationProps> = ({isAuthenticationActive,authType}) => {
  const [activeTab, setActiveTab] = useState(authType);

  return ( <div className={`${isAuthenticationActive? "block": "hidden"}`}>
    <div className="flex flex-col p-8">
      <div className="h-[4rem] w-[40%] flex justify-evenly items-center self-center">
        <button
          onClick={() => setActiveTab("register")}
          className={`w-[46%] h-[2.6rem] rounded-lg border font-semibold my-2 py-2 
            ${activeTab === "register" ? "bg-[#393E46] text-[#EFEEEA]" : "bg-[#F8F8E1] text-[#273F4F]"}`}
        >
          Sign Up
        </button>
  
        <button
          onClick={() => setActiveTab("login")}
          className={`w-[46%] h-[2.6rem] rounded-lg border font-semibold my-2 py-2 
            ${activeTab === "login" ? "bg-[#393E46] text-[#EFEEEA]" : "bg-[#F8F8E1] text-[#273F4F]"}`}
        >
          Login
        </button>
      </div>
    </div>
    {activeTab === "login" ? <Login /> : <Signup/>}
  
      
      
    </div>
  );
};

export default AuthenticationPage;