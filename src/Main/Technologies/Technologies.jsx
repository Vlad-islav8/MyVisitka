import { useSelector } from 'react-redux'
import styles from './Technologies.module.css'
import { getTechnologies } from '../../Selectors/adminSelectors'
import TechItem from './TechItem/TechItem'
const Technologies = () => {
    const technologies = useSelector(getTechnologies)
    return (
        <section className={styles.technologies} id='skills'>
            {
                technologies.map((el) => {
                    return <TechItem name={el.name} title={el.title} info={el.info} icon={el.icon} />
                })
            }
        </section>
        
    )
}

export default Technologies