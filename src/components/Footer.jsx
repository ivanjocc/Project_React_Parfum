import React from 'react'
import styles from '../styles/Footer.module.scss';

function Footer() {
  return (
	<div>
		<footer className={styles.footer}>
			<p className={styles.copy}>&copy; Copyright by Ivan</p>
		</footer>
	</div>
  )
}

export default Footer