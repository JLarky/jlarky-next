import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  const tags = []
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article
        className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
        style={{ fontFamily: 'Georgia,serif' }}
      >
        <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
          {postData.title}
        </h1>
        <p className="font-sans text-sm md:text-base font-normal text-gray-600">
          Published <Date dateString={postData.date} />
        </p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className="text-base md:text-sm text-gray-500 px-4 py-6">
        {!!tags.length && (
          <>
            Tags:{' '}
            <a
              href="#"
              className="text-base md:text-sm text-teal-500 no-underline hover:underline"
            >
              Link
            </a>{' '}
            .{' '}
            <a
              href="#"
              className="text-base md:text-sm text-teal-500 no-underline hover:underline"
            >
              Link
            </a>
          </>
        )}
      </div>
      {/*Divider*/}
      <hr className="border-b-2 border-gray-400 mx-4" />
      <div className="flex w-full items-center font-sans px-4 py-12">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="/images/profile.jpg"
          alt="Avatar of Author"
        />
        <div className="flex-1 px-2">
          <p className="text-base font-bold text-base md:text-xl leading-none mb-2">
            Yaroslav Lapin
          </p>
          <p className="text-gray-600 text-xs md:text-base">
            Senior Software Engineer at null since undefined
          </p>
        </div>
        <div className="justify-end">
          <Link href="/blog">
            <a className="bg-transparent border border-gray-500 hover:border-teal-500 text-xs text-gray-500 hover:text-teal-500 font-bold py-2 px-4 rounded-full">
              Read More
            </a>
          </Link>
        </div>
      </div>
      <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
      {false && (
        <div className="font-sans flex justify-between content-center px-4 pb-12">
          <div className="text-left">
            <span className="text-xs md:text-sm font-normal text-gray-600">
              &lt; Previous Post
            </span>
            <br />
            <p>
              <a
                href="#"
                className="break-normal text-base md:text-sm text-teal-500 font-bold no-underline hover:underline"
              >
                Blog title
              </a>
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs md:text-sm font-normal text-gray-600">
              Next Post &gt;
            </span>
            <br />
            <p>
              <a
                href="#"
                className="break-normal text-base md:text-sm text-teal-500 font-bold no-underline hover:underline"
              >
                Blog title
              </a>
            </p>
          </div>
        </div>
      )}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
