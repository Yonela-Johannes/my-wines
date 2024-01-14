import '../globals.css'
import Header from '@/components/header/Header'

export default function RootLayout({
  children
}: {children: React.ReactNode
}){
  return (
    <html lang='en'>
      <body className={`w-full h-screen items-center`}>
        <Header />
          <main className="flex justify-center">
            <section className='main-container'>
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>
          </main>
      </body>
    </html>
  )
}
