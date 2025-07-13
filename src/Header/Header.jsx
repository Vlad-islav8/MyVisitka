import { setNewColor } from '../Redux/AdminReducer'
import { getActiveContacts, getContacts } from '../Selectors/adminSelectors'
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
    const dispatch = useDispatch()

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
                <a href="#scils">Навыки</a>
                <a href="#portfolio">Портфолио</a>
                <a href="#contacts">Контакты</a>
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