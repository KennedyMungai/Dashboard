'use client'

import { selectSupermarketSalesData } from '@/redux/features/supermarketSales/supermarketSalesSlice'
import { useAppSelector } from '@/redux/hooks'
import GrossProfit from './GrossProfit'
import BarChart from './BarChart'

type Props = {}

const ChartGrid = (props: Props) => {
	const salesData = useAppSelector(selectSupermarketSalesData)

	return (
		<div className='w-full h-full p-5 flex flex-1 flex-wrap'>
			<GrossProfit data={salesData.gross_income_data} title={'Gross Profit'} description={'The gross profit of the supermarket'} />	
			<BarChart data={salesData.total_sales_per_branch} />
		</div>
	)
}

export default ChartGrid
