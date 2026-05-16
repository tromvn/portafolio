import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Sección de Introducción */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre mí</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Soy un desarrollador apasionado por la tecnología, no como fin, sino
            como medio. Con experiencia en
            <strong className="text-gray-800">
              {" "}
              React, Typescript, NestJS y Tailwind
            </strong>
            , me especializo en crear aplicaciones web modernas, escalables y
            fáciles de usar.
          </p>
        </section>
        {/* Sección de Habilidades */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "React", level: "Intermedio" },
              { name: "TypeScript", level: "Intermedio" },
              { name: "Tailwind CSS", level: "Básico" },
              { name: "JavaScript", level: "Intermedio" },
              { name: "HTML/CSS", level: "Intermedio" },
              { name: "Node.js", level: "Intermedio" },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                <p className="text-sm text-gray-500">{skill.level}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Sección de Proyectos Destacados */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Proyectos Destacados
          </h2>
          <div className="grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Portafolio Personal",
                description:
                  "Un portafolio web para mostrar mis proyectos y experiencia.",
                tags: ["React", "TypeScript", "Tailwind CSS"],
              },
              {
                title: "Aplicación de Tareas",
                description:
                  "Una app para gestionar tareas diarias con autenticación.",
                tags: ["React", "Firebase", "Tailwind CSS"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Contacto */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contáctame</h2>
          <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mv-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-r-transparent"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="tu.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Enviar
            </button>
          </form>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
