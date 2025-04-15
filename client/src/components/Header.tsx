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
  <h1></h1>
  );
}
