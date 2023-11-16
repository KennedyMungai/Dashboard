'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const ThemeProvider = ({ children }: Props) => {
	return (
		<NextThemesProvider
			attribute='class'
			enableSystem
			defaultTheme='system'
		>
			{children}
		</NextThemesProvider>
	)
}

export default ThemeProvider
