'use client'

import { selectSupermarketSalesData } from '@/redux/features/supermarketSales/supermarketSalesSlice'
import { useAppSelector } from '@/redux/hooks'
import { Line } from 'react-chartjs-2'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../ui/card'

type Props = {}

const GrossIncome = (props: Props) => {
	const salesData = useAppSelector(selectSupermarketSalesData)

    const data = salesData.gross_income_data

	return (
		<Card className='w-[5rem]'>
			<CardHeader>
				<CardTitle>Line Chart</CardTitle>
				<CardDescription>
					Line Chart Data for the supermarket data
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Line 
                    datasetIdKey='id' 
                    data={{
                        labels: data.labels,
                        datasets: [{
                            label: data.label,
                            data: data.data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)'
                            ],
                        }]
                    }} 
                />
			</CardContent>
		</Card>
	)
}

export default GrossIncome
