import ChartCardTemplate from './ChartCardTemplate'

type Props = {
	data: total_sales_per_branch
	title: string
	description: string
}

const BarChart = ({ data, title, description }: Props) => {
	return (
		<ChartCardTemplate title={title} description={description}>
			BarChart
		</ChartCardTemplate>
	)
}

export default BarChart
