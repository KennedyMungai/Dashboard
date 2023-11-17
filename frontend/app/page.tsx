'use client'
import ChartGrid from '@/components/Charts/ChartGrid'
import { getSupermarketSales } from '@/redux/features/supermarketSales/supermarketSalesSlice'
import { useAppDispatch } from '@/redux/hooks'
import { useEffect } from 'react'

export default function Home() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getSupermarketSales())
	}, [])

	return (
		<main className='pt-5'>
			<ChartGrid />
		</main>
	)
}
