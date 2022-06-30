import React, { FC } from 'react'
import './footer.scss'

const Footer: FC = () => {
	return (
		<footer className='footer'>
			<div className="container">
				<button className='footer__btn'>Оформить и оплатить</button>
				<div className="footer__summ">Итого к оплате на сайте: <span className='title'>21 072 ₽</span></div>
			</div>
		</footer>
	)
}

export default Footer