import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Desarrollo Web", href: "/desarrollo-web" },
    { name: "Redes Sociales", href: "/redes-sociales" },
    { name: "Pauta Publicitaria", href: "/pauta-publicitaria" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="bg-flaks-dark/95 backdrop-blur-sm border-b border-flaks-gray-dark/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-black font-lato text-flaks-green">
              FLAKS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-flaks-green transition-colors duration-300 font-lato font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
              ¡Empecemos!
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-flaks-green transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-flaks-dark-secondary rounded-lg mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-flaks-green block px-3 py-2 text-base font-medium font-lato transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold py-2 rounded-lg transition-all duration-300">
                  ¡Empecemos!
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
