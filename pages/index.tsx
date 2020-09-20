import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { BlogPosts } from './posts'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
        style={{ fontFamily: 'Georgia,serif' }}
      >
        <p>
          My name is{' '}
          <Link href="/contacts">
            <a className="text-gray-900">Yaroslav Lapin</a>
          </Link>
          , I do things on the internet. There’re few outdated pages about me
          and now I'm adding one more!
        </p>
      </section>
      <BlogPosts allPostsData={allPostsData} />
      <div className="py-6"> </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
