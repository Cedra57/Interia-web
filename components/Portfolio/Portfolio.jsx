import styles from './styles.module.css'

const Portfolio = () => {

    const itemsData = [
        { id: 1, img: '/img/portfolio/portfolio-1.jpg' },
        { id: 2, img: '/img/portfolio/portfolio-2.jpg' },
        { id: 3, img: '/img/portfolio/portfolio-3.jpg' },
        { id: 4, img: '/img/portfolio/portfolio-4.jpg' },
        { id: 5, img: '/img/portfolio/portfolio-5.jpg' },
        { id: 6, img: '/img/portfolio/portfolio-6.jpg' },
        { id: 7, img: '/img/portfolio/portfolio-7.jpg' },
        { id: 8, img: '/img/portfolio/portfolio-8.jpg' },
        { id: 9, img: '/img/portfolio/portfolio-9.jpg' },
        { id: 10, img: '/img/portfolio/portfolio-10.jpg' },
    ];


    return (
        <section id='portfolio' className='h-[900px] !pt-[30px] !pb-[100px]'>
            
            <div className='container'>
                <p className={styles.portfolio__undertitle}>PORTFOLIO</p>
                <div className={styles.portfolio__header}>
                    <h1>Наши проекты,</h1>
                    <p>которыми мы гордимся</p>
                </div>
            
                <div className={styles.portfolio__wrapper}>
                    <div className={styles.portfolio__items}>
                        {itemsData.map((item) => (
                            <div
                                key={item.id}
                                className={styles.portfolio__item}
                                tabIndex={0} 
                                style={{ backgroundImage: `url(${item.img})` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;