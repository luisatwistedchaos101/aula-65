import { useForm } from "react-hook-form";
import IClass from "./interface/IClass";


function App() {

  const { register, handleSubmit, formState: { errors } } = useForm<IClass>();

  function onSubmit(dados: IClass) {
    console.log(dados);
  }

  return (
    <>
      <header>
        <h1>olá mundo</h1>
        <a href="/">Turmas</a>
        <a href="/">Criar turma</a>
      </header>
      <main>
        {/* {salas.map((sala) => (
          <ClassCard sala={sala} />
        ))} */}
      </main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name"{...register("name", { required: "Nome Obrigatório" })}>
        </input>
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="capacity">Sala:</label>
        <select id="class">
          <option selected disabled></option>
          <option value="1">Lab. 1</option>
          <option value="2">Lab. 2</option>
          <option value="3">Lab. 3</option>
          <option value="4">Lab. 4</option>
        </select>

        <label htmlFor="date">Data</label>
        <select id="date">
          <option selected disabled></option>
          <option value="terca">Terça-Feira</option>
          <option value="quarta">Quarta-Feira</option>
          <option value="quinta">Quinta-Feira</option>
          <option value="sexta">Sexta-Feira</option>
        </select>

        <label htmlFor="hour">Horário:</label>
        <input type="time" id="hour">
        </input>
        <button>Enviar</button>
      </form >
    </>
  )
}

export default App
