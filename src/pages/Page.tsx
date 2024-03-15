import type { Post } from '../types/post'
import { Layout } from '../components/Layout'

export const ArticlePage = (props: { post: Post }) => {
  return (
    <Layout title={props.post.title}>
      <h1>{props.post.title}</h1>
      <article>{props.post.body}</article>
    </Layout>
  )
}
