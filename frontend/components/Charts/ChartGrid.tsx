'use client'

import { useAppSelector } from '@/redux/hooks'
import GrossIncome from './GrossIncome'

type Props = {}

const ChartGrid = (props: Props) => {
	return <div className='w-full h-full'><GrossIncome /></div>
}

export default ChartGrid
