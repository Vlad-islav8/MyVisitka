import { useSelector } from "react-redux"
import { getPortfolio } from "../../Selectors/adminSelectors"
import PSlider from "./PSlider/PSlider"
import styles from './Portfolio.module.css'
const Portfolio = () => {
    const portfolio = useSelector(getPortfolio)
    return (
        <>
        <div className={styles.portfolio} id="portfolio">
            <h3>Мое портфолио:</h3>
            <PSlider portfolio={portfolio}/>
        </div>
        </>
    )
}

export default Portfolio