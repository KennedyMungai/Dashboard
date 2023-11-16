import React from 'react'
import ThemeToggle from './ThemeToggle'

type Props = {}

const NavBar = (props: Props) => {
	return (
		<nav className='h-[10vh] shadow-sm dark:shadow-slate-700 flex justify-between'>
			<div className=''>
				<h1 className='w-full flex justify-center uppercase text-2xl'>
					Something Something Charts App
				</h1>
			</div>
			<div className=''>
				<ThemeToggle />
			</div>
		</nav>
	)
}

export default NavBar
