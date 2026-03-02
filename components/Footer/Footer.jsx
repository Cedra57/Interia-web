import styles from './styles.module.css'
import navItems from '../Nav/Nav'


const Footer = () => {

    return (

        <footer>
            <div className='bg-[#131616]'>
                <div className='container'>
                    <div className={styles.footer__up}>
                        <ul className={styles.footer__links}>
                            <li>
                                <a href='#about'>о нас</a>
                            </li>
                            <li>
                                <a href='#services'>услуги</a>
                            </li>
                            <li>
                                <a href='#portfolio'>протфолио</a>
                            </li>
                            <li className="!ml-auto">
                                <a href="#hero">INTERIA</a>
                            </li>
                        </ul>
                        <div className={styles.footer__socials}>
                            <ul className='flex gap-[20px]'>
                                <li>
                                    <a href='#'>
                                        <img src='/img/Facebook.svg' alt='Facebook'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <img src='/img/Twitter.svg' alt='Twitter' />
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <img src='/img/Linkedin.svg' alt='Linkedin'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <img src='/img/Instagram.svg' alt='Instagram'/>
                                    </a>
                                </li>
                            </ul>
                            <div className={styles.footer__socials_text}>Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc.</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={styles.footer__bottom}>
                    <p>© Copyright by Interia-Studio – Все права защищены.</p>
                    <div className={styles.footer__bottom_terms}>
                        <a>Публичная оферта</a>
                        <a>Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;