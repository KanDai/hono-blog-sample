import { css } from 'hono/css'
import type { Post } from '../types/post'
import { Layout } from '../components/Layout'

export const HomePage = (props: { posts: Post[] }) => {
  const postsClass = css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  `

  const postClass = css`
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 4px;
  `

  return (
    <Layout title="ブログTOP">
      <h1>サンプルブログ</h1>

      <div class={postsClass}>
        {props.posts.map((post: Post) => {
          return (
            <a href={`./post/${post.id}`} class={postClass}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </a>
          )
        })}
      </div>
    </Layout>
  )
}
