import Main from '../Main/Main'
import styles from './Container.module.css'
const Container = (props) => {
    return (
        <div className={styles.container}>
            <Main />
        </div>
    )
}

export default Container