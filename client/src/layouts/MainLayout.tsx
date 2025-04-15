import { ReactNode } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

//{ children }: MainLayoutProps//{children}
import "@/css/finance/MainLayout.css"

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="">
      <Header />
      <div className="">
        <Sidebar />
        <main className="main__container">
        {children} 
        </main>
      </div>
      <Footer />
    </div>
  );
}
