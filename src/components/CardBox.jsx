import React from 'react'
import Card from './Card'
import '../styles/CardBox.scss'

function CardBox() {
  return (
	<div className='container'>
		<h1>Descubre el mundo de los gatos</h1>
		<div className='container-cards'>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>
  )
}

export default CardBox