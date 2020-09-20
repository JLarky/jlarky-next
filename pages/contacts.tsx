import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { GetStaticProps } from 'next'
import { getFileLastModified } from '../lib/files'
import Date from '../components/date'

type Props = { lastModified: string }

export const Contacts: React.FC<Props> = ({ lastModified }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} contacts</title>
      </Head>
      <section
        className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
        style={{ fontFamily: 'Georgia,serif' }}
      >
        <p className="py-2">Hi!</p>
        <p className="py-2">
          On most things on the internet I have nick <b>JLarky</b> or{' '}
          <b>jlarky2012</b> (it was funnier before the end of the world
          happened, I should have used jlarky2020). But my real name is Yaroslav
          Ivanovich Lapin (Ярослав Иванович Лапин), I was born in USSR and lived
          most of my live in Russia but last few years I live in USA. I rarely
          care about updating this kind of information on social networks, so
          this is going to go stale at some point as well :)
        </p>
        <p className="py-2">
          I care about some people, games and programming. Lately I mostly code
          in React/TypeScript and Elixir.
        </p>
        <p className="py-2" title={lastModified}>
          Right at this moment (<Date dateString={lastModified} />) I would say
          that best way to reach me is Telegram or Twitter. But I have some
          other links that I'm going to add here in time :)
        </p>
      </section>
      <div className="py-6"> </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const lastModified = await getFileLastModified('contacts.tsx')
  return {
    props: {
      lastModified
    }
  }
}

export default Contacts
