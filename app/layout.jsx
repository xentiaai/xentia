import './globals.css'

export const metadata = {
  title: 'Xentia — AI agents platform'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="app-body">{children}</body>
    </html>
  )
}
