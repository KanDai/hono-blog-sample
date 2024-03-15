import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { HomePage } from './pages/Index'
import { ArticlePage } from './pages/Page'
import { PostPage } from './pages/Post'
import type { Post } from './types/post'

type Bindings = {
  BLOG_KV: KVNamespace
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {
  const list = await c.env.BLOG_KV.list()
  const keys = list.keys
  const posts: Post[] = await Promise.all(
    keys.map(async (key) => {
      const post = await c.env.BLOG_KV.get(key.name)
      if (post) {
        return JSON.parse(post)
      }
    })
  )

  return c.html(<HomePage posts={posts.filter((p) => p)} />)
})

app.get('/post/:id', async (c) => {
  const post = await c.env.BLOG_KV.get(c.req.param('id'))

  if (!post) {
    return c.json({ error: 'Post not found' })
  }

  return c.html(<ArticlePage post={JSON.parse(post)} />)
})

app.use('/create', basicAuth({ username: 'admin', password: 'password' }))

app.get('/create', async (c) => {
  return c.html(<PostPage />)
})

app.post('/create', async (c) => {
  const id = crypto.randomUUID()
  const { title, body } = await c.req.parseBody()

  await c.env.BLOG_KV.put(id, JSON.stringify({ id, title, body }))

  return c.redirect(`/post/${id}`)
})

export default app
