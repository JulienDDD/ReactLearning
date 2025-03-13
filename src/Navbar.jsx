import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from "react";


const portfolioName = "Portfolio Test"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

    return <>
     <nav className="bg-gray-900 text-white fixed w-full top-0 shadow-md absolute">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Nom du portfolio */}
        <h1 className="text-xl font-bold">{portfolioName}</h1>

        {/* Menu Ordi */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className="hover:text-gray-400">Accueil</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projets</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Menu Hamburger pour mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800`}>
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li><a href="#hero" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Accueil</a></li>
          <li><a href="#projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Projets</a></li>
          <li><a href="#contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
    </>
  }
  
  export default Navbar;
  