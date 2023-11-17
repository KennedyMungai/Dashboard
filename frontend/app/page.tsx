'use client'
import ChartGrid from '@/components/Charts/ChartGrid'
import { getSupermarketSales, selectSupermarketSalesData } from '@/redux/features/supermarketSales/supermarketSalesSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect, useState } from 'react'

export default function Home() {
  const dispatch = useAppDispatch()
  const supermarketData = useAppSelector(selectSupermarketSalesData)

  const [supermarketSalesData, setSupermarketSalesData] = useState<ISupermarketSales>()

  useEffect(() => {
    dispatch(getSupermarketSales())
  }, [])
  
  console.log(supermarketData)

	return (
		<main className='pt-5'>
      <ChartGrid />
		</main>
	)
}
