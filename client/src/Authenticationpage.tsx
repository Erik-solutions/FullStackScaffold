
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import { useState } from "react";


const AuthenticationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("signup");

  return ( <div>
    <div className="flex flex-col p-8">
      <div className="h-[4rem] w-[40%] flex justify-evenly items-center self-center">
        <button
          onClick={() => setActiveTab("signup")}
          className={`w-[46%] h-[2.6rem] rounded-lg border font-semibold my-2 py-2 
            ${activeTab === "signup" ? "bg-[#393E46] text-[#EFEEEA]" : "bg-[#F8F8E1] text-[#273F4F]"}`}
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