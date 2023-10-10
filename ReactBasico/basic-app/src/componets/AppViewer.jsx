import styles from './AppViewer.module.css'
//Camada de compilação de Serviços
function somaNumero(n1, n2){
  return(n1 + n2)
}
export const AppViewer = () => {
//Retorno no display
  return (
    <>
      <div className={styles.avContainer}>AppViewer</div>
      <p>
        {somaNumero(5, 17)}
      </p>
    </>    
  )
}

export default AppViewer