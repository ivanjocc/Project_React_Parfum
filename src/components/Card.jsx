import React from 'react'
import card from '../assets/gato.avif';
import styles from '../styles/Card.module.scss';

function Card() {
  return (
	<div>
		<div className={styles.card}>
			<img src={card} alt="product" className={styles.image} />
			<h2>Gato del meneo</h2>
			<h4>ESTILO FRANCES</h4>
		</div>
	</div>
  )
}

export default Card