import styles from "./Cadastro.module.css"

export default function Cadastro() {


  return (
    <div className="app">
      <h1>Cadastro de usuario</h1>
      <form>
<input placeholder="Nome" type="text"/>
<input placeholder="Email" type="email"/>
<input placeholder="Idade" type="number"/>

<button type="submit">Cadastrar</button>
      </form>

      <div className="user-list">
        <p>Usuarios Cadastrados Aqui</p>
      </div>

    </div>
  )
}