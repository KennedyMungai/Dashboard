'use client'

import { selectSupermarketSalesData } from '@/redux/features/supermarketSales/supermarketSalesSlice'
import { useAppSelector } from '@/redux/hooks'
import GrossProfit from './GrossProfit'

type Props = {}

const ChartGrid = (props: Props) => {
	const salesData = useAppSelector(selectSupermarketSalesData)

	return (
		<div className='w-full h-full p-5 flex flex-1 flex-wrap'>
			<GrossProfit data={salesData.gross_income_data} />	
		</div>
	)
}

export default ChartGrid
