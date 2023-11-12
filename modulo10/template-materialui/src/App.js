import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Modificacao from "./components/Modificacao"; 
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Modificacao/>
      <ListarTarefa />

    </div>
  );
}

export default App;
