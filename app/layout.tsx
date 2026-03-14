import type { Metadata, Viewport } from 'next'
import { Poppins, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains"
});

export const metadata: Metadata = {
  title: 'Paras Goyal | Full-Stack Software Developer',
  description: 'Full-Stack Software Developer specializing in AI Systems, LLMs, and Distributed Systems. Building innovative, mission-critical products.',
  keywords: ['Full-Stack Developer', 'AI Engineer', 'LLM', 'Distributed Systems', 'Golang', 'Python', 'React'],
  authors: [{ name: 'Paras Goyal' }],
  openGraph: {
    title: 'Paras Goyal | Full-Stack Software Developer',
    description: 'Full-Stack Software Developer specializing in AI Systems, LLMs, and Distributed Systems.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
