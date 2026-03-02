
import styles from '@components/Nav/styles.module.css';


const Nav = () => {

	const navItems = [
		{ id: 'about', name: 'о нас', href: '#about', type: 'text' },
		{ id: 'services', name: 'услуги', href: '#services', type: 'text' },
		{ id: 'portfolio', name: 'портфолио', href: '#portfolio', type: 'text' },
		
	];

	return (
		<section id='hero' className={styles.nav__section}>
			
			<nav className={styles.nav}>
				<div className="container">
					<div className={styles.nav__wrapper}>
						<div className={styles.nav__logo}>
							<a href="#hero"><p>INTERIA</p></a>
						</div>
						<div className='flex gap-[30px]'>
							<ul className={styles.nav__links}>
								{navItems.map((item, index) => (
									<li key={index} className={styles['nav__links-item'] + (item.type === 'text' ? ` ${styles['nav__links-item--text']}` : '')}>
										<a className={styles.nav__link} href={item.href}>
											{item.name}
										</a>
									</li>
								))}
							</ul>
							<a href='#feedback' className={styles.nav__btn}>Cвязаться с нами</a>
						</div>
					</div>
				</div>
			</nav>
			
		</section>
	);
};

export default Nav;