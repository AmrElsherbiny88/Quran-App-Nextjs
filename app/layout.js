import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css"



export const metadata = {
  title: 'Quran App',
  description: 'A complete Quran website made by Amr El-Sherbiny',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
