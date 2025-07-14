import { useSelector } from "react-redux"
import { getContacts } from "../Selectors/adminSelectors"
import styles from './Footer.module.css'
const Footer = () => {
    const contacts = useSelector(getContacts)
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.footerInfo}>
                    <div className={styles.aboutMe}>
                        <h2>Обо мне</h2>
                        <p>Frontend разработчик. Занимаю созданием и поддержой сайтов и веб приложений</p>
                    </div>
                    <div className={styles.contacts}>
                        <h2>Свзяжитесь со мной</h2>
                        <div className={styles.contactsLink}>
                            {
                                contacts.map((el) => {
                                    if (el.name === "gitHub") {
                                        return
                                    } else {
                                        return (
                                            <a href={el.link}>
                                                <img src={el.icon} alt={el.name} />
                                            </a>
                                        )
                                    }
                                })
                            }
                        </div>

                    </div>
                    <div className={styles.fastlinks}>
                        <h2>Быстрые ссылки</h2>
                        <div className={styles.links}>
                            <a href="#aboutMe">Обо мне</a>
                            <a href="#skills">Навыки</a>
                            <a href="#portfolio">Портфолио</a>
                            <a href="#">Контакты</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.copyright}>
                <i>©copyright 2025</i> Федоров В.Е.
            </div>
        </footer>
    )
}

export default Footer