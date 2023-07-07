import styles from './Loading.module.css';

export default function Loading() {
    return(
        <div className={styles.container}>
            <div className={styles.containersecond}>

            </div>
            <div className={styles.containerthird}>
                <h1>CARGANDO</h1>
                <span className={styles.loader}></span>

            </div>
            <div className={styles.containersecond}>

            </div>
        </div>
    )
}