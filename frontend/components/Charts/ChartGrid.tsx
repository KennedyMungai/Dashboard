'use client'

import { Line } from 'react-chartjs-2'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { useAppSelector } from '@/redux/hooks'
import { selectSupermarketSalesData } from '@/redux/features/supermarketSales/supermarketSalesSlice'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'

type Props = {}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const ChartGrid = (props: Props) => {
    const salesData = useAppSelector(selectSupermarketSalesData)

    const data = salesData.gross_income_data

	return <div className='w-full h-full p-5 flex flex-1 flex-wrap'>
        <div className="">
        <Card className='w-[20rem]'>
			<CardHeader>
				<CardTitle>Line Chart</CardTitle>
				<CardDescription>
					Line Chart Data for the supermarket data
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-1'>
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
                            borderWidth: 1
                        }]
                    }} 
                />
			</CardContent>
		</Card>
        </div>
    </div>
}

export default ChartGrid
