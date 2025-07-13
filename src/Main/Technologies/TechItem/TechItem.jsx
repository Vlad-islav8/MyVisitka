import { useState } from 'react'
import styles from './TechItem.module.css'
import Eye from '../../Eye/Eye'
const TechItem = (props) => {
    const [modal, setModal] = useState(false)
    const handleModal = () => {
        (modal) ? setModal(false) : setModal(true)
    }
    return (
        <>
            <div className={styles.techItem} onClick={handleModal}>
                <h2>{props.name} <img src={props.icon} alt="" /></h2>
                <p>{props.title}</p>
            </div>

            <section className={`${styles.TechModal} ${modal && styles.modalActive}`}>
                <article className={styles.modalItem}>
                    <div>
                        <img src={props.icon} alt={props.name} />
                        <h2>{props.name}</h2>
                    </div>
                    <div className={styles.info}>
                        <p>{props.info}</p>
                        <div className={styles.btnBlock}>
                            <button onClick={handleModal}>Спасибо за информацию</button>
                        </div>
                    </div>
                </article>

            </section>
        </>
    )
}

export default TechItem