import { Bolt,Building2} from "lucide-react";

export default function Footer() {
  return (

    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
    gap-6 p-4 w-full bg-gray-100  border-y border-gray-200 mt-[4rem]">

<div className="p-4"> 
<span className="flex items-center  text-[24px]" >
  <Building2 className="mr-2 w-[2rem] h-[2rem] text-[#4D55CC]"/>
   <h1 className="text-[24px] font-bold my-2">BusinessOS</h1>
</span>
<h3 className="text-[18px] text-gray-600 my-2">Empowering businesses with comprehensive management solutions.</h3>
</div>
<div className="p-4"><h1 className="text-[24px] font-bold my-2">Product</h1>
<h3 className="text-[18px] text-gray-600 my-2">Features</h3>
<h3  className="text-[18px] text-gray-600 my-2">Pricing</h3>
<h3 className="text-[18px] text-gray-600 my-2">Case Studies</h3>
<h3 className="text-[18px] text-gray-600 my-2">Documentation</h3></div>
<div className="p-4">
  <h1 className="text-[24px] font-bold my-2">Company</h1>
  <h3 className="text-[18px] text-gray-600 my-2">About</h3>
  <h3 className="text-[18px] text-gray-600 my-2">Careers</h3>
  <h3 className="text-[18px] text-gray-600 my-2">Blog</h3>
  <h3 className="text-[18px] text-gray-600 my-2">Contact</h3>
</div>

<div className="p-4">
<h1 className="text-[24px] font-bold my-2">Legal</h1>
<h3 className="text-[18px] text-gray-600 my-2">Privacy Policy</h3>
<h3 className="text-[18px] text-gray-600 my-2"> Terms of Service</h3>
<h3 className="text-[18px] text-gray-600 my-2">Coookies Policy</h3>
<h3 className="text-[18px] text-gray-600 my-2">GDPR</h3>

</div>


</div> 

<div className=" flex items-center justify-center py-4 h-[6rem] bg-gray-100">
  <h1 className="text-center text-[18px] text-gray-500"> © 2024 BusinessOS. All rights reserved.</h1>
</div>
</>
  );
}
