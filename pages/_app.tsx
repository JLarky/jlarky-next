import '../styles/tailwind.css'
import { AppProps } from 'next/app'
import { Router } from 'next/router'

import { pageview } from '../lib/gtag'

Router.events.on('routeChangeComplete', url => pageview(url))

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
