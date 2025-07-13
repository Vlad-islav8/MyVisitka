import { useSelector } from 'react-redux'
import styles from './Eye.module.css'
import { getMousePosition } from '../../Selectors/adminSelectors'
import { useEffect, useState } from 'react'
const Eye = () => {
    let mousePosition = useSelector(getMousePosition)
    const [coord, setCoord] = useState({x: 0, y: 0})
    const calсPupilCoord = (mousePosition) => {
        const coord = {x: 0, y: 0}

        const eyeX = 100
        const eyeY = 100

        const displayX = window.innerWidth
        const displayY = window.innerHeight

        const mouseX = mousePosition.x
        const mouseY = mousePosition.y


        const difX = displayX / eyeX
        const difY = displayY / eyeY
        
        coord.x = mouseX / difX
        coord.y = mouseY / difY
        return coord
    }
    
    useEffect(() => {
        setCoord(calсPupilCoord(mousePosition))
    }, [mousePosition.x, mousePosition.y])
    return (
            <div className={styles.smile}>
                <div className={styles.eyes}>
                    <span className={styles.eye}>
                        <span className={styles.pupil} style={{ left: coord.x + 'px', top: coord.y + 'px' }}></span>
                    </span>
                    <span className={styles.eye}>
                        <span className={styles.pupil} style={{ left: coord.x + 'px', top: coord.y + 'px' }}></span>
                    </span>
                </div>
            </div>
    )
}

export default Eye