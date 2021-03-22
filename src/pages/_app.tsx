import React from 'react'
import { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import dark from '../styles/themes/dark'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
