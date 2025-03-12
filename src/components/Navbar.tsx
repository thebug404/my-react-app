
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { GraduationCap, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-semibold">PlataformaEducativaUma</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#caracteristicas" className="text-sm font-medium link-underline">Características</a>
          <a href="#beneficios" className="text-sm font-medium link-underline">Beneficios</a>
          <a href="#testimonios" className="text-sm font-medium link-underline">Testimonios</a>
          <a href="#contacto" className="text-sm font-medium link-underline">Contacto</a>
          <a 
            href="#registro" 
            className="rounded-full bg-primary text-white px-5 py-2 text-sm font-medium transition-all hover:bg-primary/90 hover:scale-105"
          >
            Registrarse
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-black border-t border-border animate-slide-in-right md:hidden">
          <div className="p-6 flex flex-col space-y-4">
            <a href="#caracteristicas" className="text-lg font-medium">Características</a>
            <a href="#beneficios" className="text-lg font-medium">Beneficios</a>
            <a href="#testimonios" className="text-lg font-medium">Testimonios</a>
            <a href="#contacto" className="text-lg font-medium">Contacto</a>
            <a 
              href="#registro" 
              className="rounded-full bg-primary text-white px-5 py-2 text-lg font-medium text-center transition-all hover:bg-primary/90"
            >
              Registrarse
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
