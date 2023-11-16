import React from 'react'
import ThemeProvider from '../../providers/ThemeProvider'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='h-[10vh] shadow-sm dark:shadow-slate-700'>
        <div className=""><h1 className="w-full flex justify-center uppercase text-2xl">Something Something Charts App</h1></div>
        <div className=""><ThemeProvider /></div>
    </nav>
  )
}

export default NavBar