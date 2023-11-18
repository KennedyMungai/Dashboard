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
import ChartCardTemplate from './ChartCardTemplate'

type Props = {
	data: gross_income_data
	title: string
	description: string
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

const GrossProfit = ({ data, title, description }: Props) => {
	return (
		<ChartCardTemplate title={title} description={description}>
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
		</ChartCardTemplate>
	)
}

export default GrossProfit
