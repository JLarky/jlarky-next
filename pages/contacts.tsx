import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export const Contacts: React.FC = ({}) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} contacts</title>
      </Head>
      <section
        className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
        style={{ fontFamily: 'Georgia,serif' }}
      >
        <p>
          Right at this moment I would say that best way to reach me is Telegram
          or Twitter.
        </p>
      </section>
      <div className="py-6"> </div>
    </Layout>
  )
}

export default Contacts
