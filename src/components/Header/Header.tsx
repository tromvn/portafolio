import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Mi Portafolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#sobre-mi"
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#Contacto"
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
