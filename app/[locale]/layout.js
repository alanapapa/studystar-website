import { NextIntlClientProvider } from 'next-intl'
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import Footer from './components/Footer'
import Navbar2 from './components/Navbar2'
import '../globals.css'
import { Inter } from 'next/font/google'
import { Container } from './components/Container'
import { PlayProvider } from '../contexts/Play'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Study-Star',
    description: 'National Teacher Prize Kazakhstan',
}

export function generateStaticParams() {
    return [{ locale: 'kk' }, { locale: 'en' }, { locale: 'ru' }]
}

export default async function LocaleLayout({ children, params: { locale } }) {
    let messages
    try {
        messages = (await import(`../../messages/${locale}.json`)).default
    } catch (error) {
        notFound()
    }

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <PlayProvider>
                        <Navbar2 />
                        {children}
                        <Footer />
                    </PlayProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
