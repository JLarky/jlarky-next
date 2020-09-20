import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData, PostData, SortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

type Props = { allPostsData: SortedPostsData }

export const Blog: React.FC<Props> = ({ allPostsData }) => {
  return (
    <Layout home={false}>
      <Head>
        <title>{siteTitle} &gt; Blog</title>
      </Head>
      <BlogPosts allPostsData={allPostsData} />
      <div className="py-6"> </div>
    </Layout>
  )
}

export const BlogPosts: React.FC<Props> = ({ allPostsData }) => {
  return (
    <section
      className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
      style={{ fontFamily: 'Georgia,serif' }}
    >
      <h2 className="py-4 text-2xl font-bold">Blog</h2>
      <ul className="">
        {allPostsData.map(({ id, date, title }) => (
          <li className="" key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a className="underline">{title}</a>
            </Link>
            <br />
            <small className="">
              <Date dateString={date} format="LLLL d, yyyy" />
            </small>
          </li>
        ))}
      </ul>
    </section>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Blog
