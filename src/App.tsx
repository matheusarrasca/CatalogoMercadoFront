import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header titulo="Catálogo Mercado" />

      <h2>Produtos</h2>

      <ul>
        <li>Notebook</li>
        <li>Mouse</li>
        <li>Teclado</li>
      </ul>

      <Footer />
    </div>
  );
}

export default App;