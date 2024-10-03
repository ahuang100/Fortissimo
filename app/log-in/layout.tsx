export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-['Quattrocento',_serif]">{children}</body>
    </html>
  )
}