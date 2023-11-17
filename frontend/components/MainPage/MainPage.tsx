'use client'

import { selectSupermarketSalesData } from '@/redux/features/supermarketSales/supermarketSalesSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'

type Props = {}

const MainPage = (props: Props) => {
	const dispatch = useAppDispatch()
	const supermarketData = useAppSelector(selectSupermarketSalesData)

	useEffect(() => {
		console.log(supermarketData)
	}, [])

	return <div>MainPage</div>
}

export default MainPage
