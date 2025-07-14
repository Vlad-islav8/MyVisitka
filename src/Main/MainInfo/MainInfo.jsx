import styles from './MainInfo.module.css'
import MeAndPhone from '../../Images/MeAndPhone.png'
import close from '../../Images/close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts, getcontactsModal } from '../../Selectors/adminSelectors'
import { setContactsModal } from '../../Redux/AdminReducer'
const MainInfo = () => {
    const contacts = useSelector(getContacts)
    const contactsModal = useSelector(getcontactsModal)
    const dispatch = useDispatch()
    const handleModal = () => {
        debugger
        (!contactsModal) ? dispatch(setContactsModal(true)) : dispatch(setContactsModal(false))
    }
    return (
        <>
            <section className={styles.mainInfo}>
                <article className={styles.mainInfoText}>
                    <h1>Frontend Developer</h1>
                    <h2>Разработка интерфейсов / сайтов </h2>
                    <button onClick={handleModal}>Связаться со мной</button>
                    <span className={styles.square}></span>
                    <span className={`${styles.square} ${styles.two}`}></span>
                </article>
                <article className={styles.mainInfoPhoto}>
                    <img src={MeAndPhone} alt="" />
                </article>
            </section>
            <section className={`${styles.modal} ${(contactsModal && styles.activeModal)}`}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h2 className={styles.modalInfo}>Мои контакты</h2>
                        <button onClick={handleModal} className={styles.closeBtn}>
                            <img src={close} alt="Закрыть" />
                        </button>
                    </div>
                    <article className={styles.modalContacts}>
                        {
                            contacts.map((el) => {
                                if (el.name === 'phoneNumber') {
                                    return (
                                        <a href={`tel:+7${el.link}`} title={`+7${el.link}`}>
                                            <img src={el.icon} alt={el.name} />
                                        </a>
                                    )
                                }
                                if (el.name === 'gitHub') {
                                    return
                                }
                                return (
                                    <a href={el.link} title={el.name}>
                                        <img src={el.icon} alt={el.name} />
                                    </a>
                                )
                            })
                        }
                    </article>
                </div>
            </section>
        </>

    )
}

export default MainInfo