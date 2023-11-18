import React, { ReactNode } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../ui/card'

type Props = {
	title: string
	description: string
	children: ReactNode
}

const ChartCardTemplate = ({ title, description, children }: Props) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className='flex m-2 p-2'>{children}</CardContent>
		</Card>
	)
}

export default ChartCardTemplate
