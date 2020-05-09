import { NextApiRequest, NextApiResponse } from 'next'
import { getPostData } from '../../lib/posts'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { postId } = req.query
  if (postId && typeof postId === 'string') {
    const { contentHtml } = await getPostData(postId)
    res.status(200).json({ contentHtml })
  } else {
    res.status(400).json({ error: 'no postId' })
  }
}
