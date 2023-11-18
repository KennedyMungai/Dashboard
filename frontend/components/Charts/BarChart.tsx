import { Bar } from 'react-chartjs-2'
import ChartCardTemplate from './ChartCardTemplate'
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
	data: total_sales_per_branch
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

const BarChart = ({ data, title, description }: Props) => {
	return (
		<ChartCardTemplate title={title} description={description}>
			<Bar
				datasetIdKey='id'
				data={{
					labels: data.labels,
					data: data.data,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}}
			/>
		</ChartCardTemplate>
	)
}

export default BarChart
