import styles from './AppViewer.module.css'
//Camada de Compilação de Serviços
const AppViewer = () => {
  //Retorno no display
  const professores = [
    { id: 0, nome: "Jhonata Santos", idade: 26, formacao: "Desenvolvimento de Sotware", titulacao: "Jhow" },
    { id: 1, nome: "Maria Silva", idade: 30, formacao: "Engenharia de Software", titulacao: "Doutorado" },
    { id: 2, nome: "Pedro Oliveira", idade: 28, formacao: "Ciência da Computação", titulacao: "Desenvolvedor Full Stack" },
    { id: 3, nome: "Ana Pereira", idade: 24, formacao: "Engenharia Elétrica", titulacao: "Doutorado" },
    { id: 4, nome: "Carlos Rodrigues", idade: 35, formacao: "Medicina", titulacao: "Mestrado" },
    { id: 5, nome: "Mariana Ferreira", idade: 29, formacao: "Psicologia", titulacao: "Mestrado" },
    { id: 6, nome: "Luisa Santos", idade: 27, formacao: "Marketing Digital", titulacao: "Especialista em Marketing" },
    { id: 7, nome: "Rafaela Oliveira", idade: 32, formacao: "Engenharia Civil", titulacao: "Mestrado" },
    { id: 8, nome: "Gustavo Pereira", idade: 30, formacao: "Economia", titulacao: "Doutorado" }
  ]

  return (
    <>
      <h2>Lista de Professores</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Formação</th>
          <th>Titulação</th>
        </tr>
        {
          professores.map((professor) => {
            return (
              <tr className={professor.id % 2 == 0 ? styles.lineGrey : null} key={professor.id}>
                <td>{professor.id}</td>
                <td>{professor.nome}</td>
                <td>{professor.idade}</td>
                <td>{professor.formacao}</td>
                <td className={professor.titulacao == "Mestrado" || professor.titulacao == "Doutorado" ? styles.superTitulo : styles.normalTitulo}>{professor.titulacao}</td>
              </tr>
            )
          })
        }
      </table>

    </>
  )
}

export default AppViewer