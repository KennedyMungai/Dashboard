import ThemeProvider from '@/providers/ThemeProvider'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Simple Dashboard app with Charts'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={open_sans.className}>
				<ThemeProvider><NavBar />{children}</ThemeProvider>
			</body>
		</html>
	)
}
