import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800">
          ¡Bienvenid@ a mi portafolio!
        </h1>
        <p className="mt-4 text-gray-600">
          Aquí podrás ver mis proyectos y experiencia.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
