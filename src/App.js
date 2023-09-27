import "./App.css";
import { useState } from "react";

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  const [tarefa, setTarefa] = useState("");

  function adicionarNovaTarefa() {
    setListaDeTarefas([...listaDeTarefas, { texto: tarefa, concluida: false }]);
    setTarefa("");
  }

  function deletarTarefa(index) {
    const tempLista = [...listaDeTarefas];
    tempLista.splice(index, 1);
    setListaDeTarefas(tempLista);
  }

  function alternarConclusao(index) {
    const novasTarefas = [...listaDeTarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setListaDeTarefas(novasTarefas);
  }

  return (
    <div className="container">
      <input
        value={tarefa}
        onChange={(value) => setTarefa(value.target.value)}
        type="text"
      />
      <button className="botaoAdicionar" onClick={() => adicionarNovaTarefa()}>
        Nova Tarefa
      </button>
      <ul className="lista">
        {listaDeTarefas.map((item, index) => (
          <li className="tarefa" key={index}>
              {item.texto} 
            <button onClick={() => deletarTarefa(index)}>Deletar</button>
            <label>
              <input
                type="checkbox"
                checked={item.concluida}
                onChange={() => alternarConclusao(index)}
                disabled={item.concluida}
              />Concluída
              </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
