import { Building2, CirclePlus,LogIn } from "lucide-react"
import { Businesses } from "@/components/ui/BusinessCardRender"
import FavourateBusinesses from "@/components/ui/BusinessDirectory"
import { Testimonials } from "@/components/ui/TestimonialRender"
import Footer from "@/components/Footer"
import AuthenticationPage from "@/Authenticationpage"
import Header from "@/components/Header"
import { useState } from "react"
import { useLocation } from "wouter";
import { useAuth } from "@/authentication/AuthContext"

export const  LandingPage: React.FC = () => {
    const [loginIsActive,setLogin]= useState(false)
    const [authType, setAuthType] = useState<"login" | "register" | null>(null);

    const [, navigate] = useLocation();
    const { login } = useAuth();

    function  toggleLogin(){
        setLogin(true);
        setAuthType("login");
       
    }


    function handleRegisterClick() {
        setAuthType("register");
        setLogin(true);
          }
    
    return  loginIsActive && authType ? (
  <AuthenticationPage authType={authType} isAuthenticationActive={loginIsActive} />) :
  (<>
   <Header onLoginToggle={toggleLogin} onRegisterClick={handleRegisterClick}/>


< Businesses/>
<FavourateBusinesses/>
<Testimonials/>
<Footer/>
</>);
};

