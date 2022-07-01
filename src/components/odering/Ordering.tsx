import React, { FC, useLayoutEffect, useState } from 'react'
import { useMatchMedia } from '../../assets/hooks/useMatchMedia'
import Delivery from '../delivery/Delivery'
import Order from '../order/Order'
import './ordering.scss'

const Ordering: FC = () => {
	const {isMobile} = useMatchMedia()

	console.log(isMobile)
	return (
		<div className='ordering'>
			<Delivery/>
			{!isMobile && <Order/>}
		</div>
	)
}

export default Ordering