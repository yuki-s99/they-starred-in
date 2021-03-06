import React from 'react'
import {ChakraProvider} from "@chakra-ui/react"
import Head from 'next/head'

import './globals.scss'

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="icon"
              href="data:image/svg+xml,
              <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎬</text>
              </svg>" />
        <meta property="og:title" content="They Starred In - search film actors & actresses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theystarred.in" />
        <meta property="og:image:secure_url" itemProp="image" content="https://theystarred.in/og-screenshot.jpg" />
        <meta property="og:description" content="Search for movies where someone has starred in quickly and easily" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content="Curious to find more movies where an actor or actress has starred in? This is just the tool for you!" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
