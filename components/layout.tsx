import classNames from 'classnames'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { HeaderNavLink } from './HeaderNavLink'
import { useRouter } from 'next/router'

export const siteTitle = 'Yaroslav Lapin'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  const router = useRouter()
  const [showMenu, setShowMenu] = React.useState(false)
  const [scrolledDown, setScrolledDown] = React.useState(false)
  const progress = React.useRef<null | HTMLDivElement>(null)

  React.useEffect(() => {
    /* Progress bar */
    //Source: https://alligator.io/js/progress-bar-javascript-css-variables/
    var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight',
      scroll
    var scrollPosition = window.scrollY

    const listener = function () {
      /*Refresh scroll % width*/
      scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
      progress.current?.style.setProperty('--scroll', scroll + '%')

      scrollPosition = window.scrollY

      setScrolledDown(scrollPosition > 10)
    }
    document.addEventListener('scroll', listener)
    return () => document.removeEventListener('scroll', listener)
  }, [])

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav
        className={classNames(
          'fixed w-full z-10 top-0',
          scrolledDown ? 'bg-white' : 'bg-gray-100',
          (scrolledDown || showMenu) && 'shadow'
        )}
      >
        <div
          ref={progress}
          className="h-1 z-20 top-0"
          style={{
            background:
              'linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)'
          }}
        />
        <div className="w-full lg:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div className="pl-4">
            <Link href="/">
              <a
                className="text-gray-900 hover:no-underline font-extrabold text-xl"
                href="/"
              >
                {home
                  ? 'The Official Website of Yaroslav Lapin'
                  : "Yaroslav Lapin's Blog"}
              </a>
            </Link>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              onClick={() => setShowMenu(x => !x)}
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={classNames(
              'w-full flex-grow lg:items-center lg:w-auto mt-2 lg:mt-0 z-20',
              !showMenu && 'hidden lg:block'
            )}
          >
            <ul className="block list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <HeaderNavLink href="/">Home</HeaderNavLink>
              </li>
              <li className="mr-3">
                <HeaderNavLink href="/posts">Blog</HeaderNavLink>
              </li>
              <li className="mr-3">
                <HeaderNavLink href="/contacts">Contacts</HeaderNavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*Container*/}
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div
          className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
          style={{ fontFamily: 'Georgia,serif' }}
        >
          {/*Title*/}
          <div className="font-sans">
            <span className="text-base md:text-sm text-teal-500 font-bold">
              <span>
                {router.pathname === '/posts/[id]' && (
                  <>
                    &lt;{' '}
                    <Link href="/posts">
                      <a className="text-base md:text-sm text-teal-500 font-bold hover:underline">
                        BACK TO BLOG
                      </a>
                    </Link>
                  </>
                )}{' '}
                <p />
              </span>
            </span>
          </div>
        </div>
        <main>{children}</main>
      </div>
      {/*/container*/}
      <footer className="bg-white border-t border-gray-400 shadow">
        <div className="container max-w-4xl mx-auto flex py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full md:w-1/2 ">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4 text-gray-600 text-sm">
                  This website is for entertainment purposes only (if I say so
                  myself). If you disagree with something please disregard it as
                  a bad joke. © {new Date().getFullYear()}
                </p>
              </div>
            </div>
            <div className="flex w-full md:w-1/2">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">Social</h3>
                <ul className="list-reset items-center text-sm pt-3">
                  <li>
                    <a
                      onClick={() => {
                        gtag('event', 'view_item', { content_id: 'telegram' })
                      }}
                      className="inline-block text-gray-500 hover:text-gray-900 hover:underline py-1"
                      href="https://t.me/JLarky"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        gtag('event', 'view_item', { content_id: 'twitter' })
                      }}
                      className="inline-block text-gray-500 hover:text-gray-900 hover:underline py-1"
                      href="https://twitter.com/JLarky"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        gtag('event', 'view_item', { content_id: 'github' })
                      }}
                      className="inline-block text-gray-500 hover:text-gray-900 hover:underline py-1"
                      href="https://github.com/JLarky"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
