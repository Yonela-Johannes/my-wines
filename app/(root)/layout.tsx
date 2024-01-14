import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import '../globals.css'
import Header from '@/components/header/Header'
const openGraphImage = { images: ['/assets/wine.png'] }

export const metadata: Metadata = {
  title: "My Wines",
  description:
    "Nestled in the enchanting landscape of Cape Town, My curated selection is not just a celebration of taste but an immersion into sophistication. Each bottle, a masterpiece meticulously added to my digital cellar, ensuring that every sip is a seamless blend of tradition. ",
  keywords: ["Premium wine selection", "Premium wine", "World wine selection"],
  openGraph: {
    ...openGraphImage,
    description: 'Wines Platform',
  }
}

export const inter = Inter({ subsets: ["latin"]});

export default function RootLayout({
  children,
}: {children: React.ReactNode;
}){

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <section className='flex items-center justify-center w-screen overflow-hidden pt-16 sm:py-28 bg-blue'>
          {children}
        </section>
      </body>
    </html>
  )
}
