import Image from 'next/image';
import styles from './styles.module.css'


const Hero = () => {

    return (
        <section className={styles.hero__section}>
            <div className={styles.hero__background_image}>
                
                    <Image
                        src="/img/BG.png"
                        alt="Background"
                        fill
                        priority
                        className="object-cover object-center -z-10"
                    />
                    <div className='container'>
                        <div className={styles.hero__wrapper}>
                            <div className={styles.hero__block}>
                                <h1 className={styles.hero__title}>Красота, продуманная до мелочей</h1>
                                <h3 className={styles.hero__subtitle}>От идеи до реализации</h3>
                            </div>
                        </div>
                    </div>
                
                

            </div>
        </section>
        
    )
}

export default Hero;