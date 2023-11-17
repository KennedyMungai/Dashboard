'use client'

import { selectSupermarketSalesData } from "@/redux/features/supermarketSales/supermarketSalesSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

type Props = {}

const MainPage = (props: Props) => {
    const dispatch = useAppDispatch()
    const supermarketData = useAppSelector(selectSupermarketSalesData)

  return (
    <div>MainPage</div>
  )
}

export default MainPage