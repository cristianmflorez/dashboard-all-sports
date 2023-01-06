import Categorias from './components/Categorias';
import Header from './components/Header'
import Totales from './components/Totales'
import UltimoProducto from './components/UltimoProducto';
import UltimoUsuario from './components/UltimoUsuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Totales />
        <UltimoUsuario />
        <UltimoProducto />
        <Categorias />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
