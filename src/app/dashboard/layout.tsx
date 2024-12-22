import "@/app/globals.css";


export const metadata = {
  title: 'Admin | zainchem',
  description: 'admin panel to mnage zainchem website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
