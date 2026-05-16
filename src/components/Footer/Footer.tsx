import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos
          reservados.
        </p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 text-inherit" fill="currentColor">
              <use href="/sprite.svg#linkedin" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6 text-inherit" fill="currentColor">
              <use href="/sprite.svg#github" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
