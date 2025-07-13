import { setContactsModal, setNewColor } from '../Redux/AdminReducer'
import { getActiveContacts, getContacts, getcontactsModal } from '../Selectors/adminSelectors'
import { getActiveTheme } from '../Selectors/initSelectors'
import styles from './Header.module.css'
import {useDispatch, useSelector} from 'react-redux'
import moon from '../Images/moon.svg'
import sun from '../Images/sun.svg'
import { setActiveTheme } from '../Redux/initReducer'
const Header = () => {
    const contacts = useSelector(getContacts)
    const activeContacts = useSelector(getActiveContacts)
    const activeTheme = useSelector(getActiveTheme)
    const contactsModal = useSelector(getcontactsModal)
    const dispatch = useDispatch()
    const hadnleModal = () => {
        (!contactsModal) ? dispatch(setContactsModal(true)) : dispatch(setContactsModal(false))
    }
    const handleTheme = () => {
        dispatch(setActiveTheme((activeTheme === "dark") ? 'light' : "dark"))
        dispatch(setNewColor((activeTheme === "dark") ? 'light' : "dark"))
    }
    return (
        <header className={styles.header}>
            <div className={styles.headerMainBlock}>
                <h2>Okimi8</h2>
                <button onClick={handleTheme} className={styles.handleThemeBtn}>
                    <img src={(activeTheme === 'dark') ? sun : moon} alt="Переключить тему" />
                </button>
            </div>
            <nav className={styles.navToSite}>
                <a href="#aboutMe">Обо мне</a>
                <a href="#skills">Навыки</a>
                <a href="#portfolio">Портфолио</a>
                <a href="#" onClick={hadnleModal}>Контакты</a>
            </nav>
            <nav className={styles.contactsNavBar}>
                {contacts.map((el) => {
                    if(el.name === activeContacts[0] | el.name === activeContacts[1]) {
                        return (
                            <a href={el.link}>
                                <img src={el.icon} alt={el.name} />
                            </a>
                        )
                    }
                })}
            </nav>

        </header>
    )
}

export default Header