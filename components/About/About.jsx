import Image from 'next/image'
import styles from './styles.module.css';




const About = () => {
    
    return (
        <section id='about' className={styles.about__section}>
            <div className="container">
                <p className={styles.about__undertitle}>ABOUT</p>
                <div className={styles.about__block}>
                    <div className={styles.about__title}>
                        <h1>Создаем интерьеры, в которых хочется жить и работать</h1>
                    </div>
                    <div className={styles.about__text}>
                        <h3>
                            Продумываем пространство до мелочей: планировка, свет, материалы, мебель и декор под ваш образ жизни и бюджет.  
                            Работаем «под ключ» — от концепции и 3D‑визуализации до авторского надзора и комплектации объекта.
                        </h3>
                    </div>
                </div>

                <ul className={styles.about__info}>
                    <li className='relative h-[442px] w-100vh'>
                        <Image 
                            src='/img/about-1.jpg'
                            alt='pictire'
                            
                            fill
                            className="object-cover"
                        />
                    </li>
                    <li className='relative h-[442px]'>
                        <Image 
                            src='/img/about-2.jpg'
                            alt='pictire'
                            fill
                            className="object-cover rounded-none max-[1279px]:rounded-tr-[50px]"
                        />
                    </li>
                    <li className='relative h-[442px]'>
                        <div className={styles.about__stats}>
                            <div className={styles.about__stats_item}>
                                <p>150K+</p>
                                <p>реализованных проектов</p>
                            </div>
                            <div className={styles.about__stats_item}>
                                <p>30%</p>
                                <p>экономии бюджета за счёт грамотного подбора материалов и решений</p>
                            </div>
                            <div className={styles.about__stats_item}>
                                <p>10+</p>
                                <p>10 лет опыта в частных и коммерческих интерьерах</p>
                            </div>
                        </div>
                    </li>
                    <li className='relative h-[442px]'>
                        <Image 
                            src='/img/about-3.jpg'
                            alt='pictire'
                            fill
                            className="object-cover rounded-none min-[1280px]:rounded-tr-[50px]"
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;