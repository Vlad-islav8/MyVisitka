import { useState } from "react"
import styles from './PSlider.module.css'
const PSlider = ({ portfolio }) => {
    const [activeSlide, setActiveSlide] = useState(0)
    const slide = portfolio[activeSlide]
    const handleNextSlide = () => {
        if (activeSlide >= portfolio.length - 1) {
            setActiveSlide(0)
        } else {
            setActiveSlide(activeSlide + 1)
        }

    }
    const handlePrevSlide = () => {
        debugger
        if (activeSlide <= 0) {
            debugger
            setActiveSlide(portfolio.length - 1)
        } else {
            setActiveSlide(activeSlide - 1)
        }
    }
    return (
        <div className={styles.PSlider}  style={{ backgroundImage: `url(${slide.prev})` }}>
            <div className={styles.slide}>
                <div className={styles.slideInfo}>
                    <p className={styles.info}>
                        <h2>{slide.name}</h2>
                        <p>{slide.title}</p>
                    </p>
                    <a href={slide.link} className={styles.link} target="_blank">Посмотреть работу...</a>
                </div>
                <button className={`${styles.btn} ${styles.next}`} onClick={handleNextSlide}>Вперед</button>
                <button className={`${styles.btn} ${styles.prev}`} onClick={handlePrevSlide}>Назад</button>
            </div>
        </div>
    )
}

export default PSlider