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
        <p title={lastModified}>
          Right at this moment (<Date dateString={lastModified} />) I would say
          that best way to reach me is Telegram or Twitter.
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
