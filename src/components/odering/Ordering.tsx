import React, { FC } from 'react'
import Delivery from '../delivery/Delivery'
import Order from '../order/Order'
import './ordering.scss'

const Ordering: FC = () => {
	return (
		<div className='ordering'>
			<Delivery/>
			<Order/>
		</div>
	)
}

export default Ordering