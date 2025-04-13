import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Bolt } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <Bolt className="text-primary h-6 w-6 mr-2" />
              <span className="font-bold text-xl">React + Express + Vite</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="px-3 py-2 rounded-md text-sm font-medium">
              <Link href="/">
                <a className={location === "/" ? "nav-link-active" : "nav-link"}>Home</a>
              </Link>
              <Link href="/documentation">
                <a className={location === "/documentation" ? "nav-link-active" : "nav-link"}>Documentation</a>
              </Link>
              <Link href="/api-reference">
                <a className={location === "/api-reference" ? "nav-link-active" : "nav-link"}>API Reference</a>
              </Link>
            </div>
            <div className="ml-4 flex items-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-full text-gray-600 hover:text-primary"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${mobileMenuOpen ? "" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-50">Home</a>
          </Link>
          <Link href="/documentation">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50">
              Documentation
            </a>
          </Link>
          <Link href="/api-reference">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50">
              API Reference
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
