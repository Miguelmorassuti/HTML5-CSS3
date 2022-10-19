import styles from './Frase.module.css'; //vai ser sempre import styles so muda o caminho

function frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Aqui ira uma frase</p>
        </div>
    )
}

export default frase