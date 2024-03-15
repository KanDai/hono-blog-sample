import { css } from 'hono/css'
import { Layout } from '../components/Layout'

export const PostPage = () => {
  const formClass = css`
    display: grid;
    gap: 1rem;
    max-width: 600px;
  `

  const inputClass = css`
    padding: 1rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  `

  const textAreaClass = css`
    padding: 1rem;
    width: 100%;
    min-height: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  `

  const buttonClass = css`
    padding: 1rem;
    min-width: 200px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  `

  return (
    <Layout title="記事投稿">
      <h1>記事投稿</h1>
      <article>
        <form action="/create" method="post" class={formClass}>
          <div>
            <input
              type="text"
              placeholder="タイトル"
              name="title"
              class={inputClass}
            />
          </div>
          <div>
            <textarea placeholder="本文" name="body" class={textAreaClass} />
          </div>
          <div>
            <button type="submit" class={buttonClass}>
              投稿
            </button>
          </div>
        </form>
      </article>
    </Layout>
  )
}
