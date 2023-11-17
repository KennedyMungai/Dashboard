'use client'

import { selectSupermarketSalesData } from '@/redux/features/supermarketSales/supermarketSalesSlice'
import { useAppSelector } from '@/redux/hooks'

type Props = {}

const ChartGrid = (props: Props) => {
	const salesData = useAppSelector(selectSupermarketSalesData)

	return <div className='w-full h-full'>ChartGrid</div>
}

export default ChartGrid
