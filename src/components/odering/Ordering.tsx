import React, { FC, useContext, useLayoutEffect, useState } from 'react'
import { useMatchMedia } from '../../assets/hooks/useMatchMedia'
import { Context } from '../../context'
import Delivery from '../delivery/Delivery'
import Order from '../order/Order'
import './ordering.scss'

const Ordering: FC = () => {
	const {isMobile} = useMatchMedia()
	const {openModal, closeModal, isVisible} = useContext(Context)
	
	return (
		<div className='ordering'>
			<Delivery openModal={() => openModal()}/>
			{!isMobile && <Order closeModal={() => closeModal()}/>}
			{isMobile && isVisible && <Order closeModal={() => closeModal()}/>}
		</div>
	)
}

export default Ordering