'use client'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../ui/card'
import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js'

type Props = {
	data: gross_income_data
}

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const GrossProfit = ({ data }: Props) => {
	return (
		<Card className='w-[20rem]'>
			<CardHeader>
				<CardTitle>Line Chart</CardTitle>
				<CardDescription>
					Line Chart Data for the supermarket data
				</CardDescription>
			</CardHeader>
			<CardContent className='flex m-2 p-2'>
				<Line
					datasetIdKey='id'
					data={{
						labels: data.labels,
						datasets: [
							{
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
							}
						]
					}}
				/>
			</CardContent>
		</Card>
	)
}

export default GrossProfit
