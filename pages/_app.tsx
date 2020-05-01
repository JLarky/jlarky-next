import '../styles/tailwind.css'
import { AppProps } from 'next/app'
import * as gtag from '../lib/gtag'
import { Router } from 'next/router'
Router.events.on('routeChangeComplete', url => gtag.pageview(url))
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
