import styles from './aboutMe.module.css'
const AboutMe = () => {
    const age = new Date().getFullYear() - 2007
    const currentPoint = () => {
        let point = new Date().getFullYear() - 2022
        switch (point) {
            case 1:
                return point + ' год '
            case 2:
                return point + ' года '
            case 3:
                return point + ' года '
            case 4:
                return point + ' года '
            default:
                return point + ' лет '

        }
    }
    const point = currentPoint()
    return (
        <section className={styles.aboutMe} id='aboudMe'>
            <article className={styles.infoBlock}>
                <h2>Фронтенд разработчик</h2>
                <p>
                    Меня зовут Владислав и на данный момент мне {age} лет.
                    Родился я в россии в городе Магнитогорск. Уже как {point} я занимаюсь разработкой веб приложений и интерфейсов.
                    За это время я закончил множество интересных и сложных проектов, мне нравиться эта ниша поэтому я не останавливаюсь на достигнутом
                    и каждый день изучаю все больше новых технологий, которые додут мне больше возможностей и позволят взяться за более сложные задачи.
                    Моя конечная цель стать <i>Sinior fullStack developer</i>. Мои скиллы на данный момент расписанны ниже. Я настроил систему и админ
                    панель так чтобы при изучении новой технологии. я мог через интерфейс моей визитки добавить ее на сайт. В дальнейшем подключю БД
                    по этому данные с этого лендинга всегда актуальны.
                </p>
            </article>
            <article className={styles.additionaBlock}></article>
        </section>
    )
}

export default AboutMe