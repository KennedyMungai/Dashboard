'use client'
import { getSupermarketSales, selectSupermarketSalesData } from '@/redux/features/supermarketSales/supermarketSalesSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'

export default function Home() {
  const dispatch = useAppDispatch()
  const supermarketData = useAppSelector(selectSupermarketSalesData)

  useEffect(() => {
    dispatch(getSupermarketSales())
  }, [])
  
  console.log(supermarketData)

	return (
		<main className='pt-5'>
			{/* <MainPage /> */}
		</main>
	)
}
