import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import styles from '../styles/Header.module.scss';

function Header() {
	return (
		<div>
			<header>
				<nav className={styles.navbar}>
					<div className={styles.navLeft}>
						<ul>
							<li className={styles.bar}>
								<FontAwesomeIcon icon={faBars} />
							</li>
							<li>
								<a href='/'>
									<img src={logo} alt='logo' className='logo' />
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.navRight}>
						<ul>
							<li>
								<button type='button' className={styles.panierButton}>
									<FontAwesomeIcon icon={faCartShopping} /> Panier
								</button>
							</li>
							<li>
								<button type="button" className={styles.connexionButton}>
									Connexion
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default Header