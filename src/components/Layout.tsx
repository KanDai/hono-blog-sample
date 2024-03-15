import { css, Style } from 'hono/css'

export const Layout = (props: { title: string; children?: any }) => {
  const wrapperClass = css`
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  `
  const headerClass = css`
    background-color: #eee;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  `
  const mainClass = css`
    padding: 2rem;
  `
  const footerClass = css`
    background-color: #eee;
    padding: 1rem;
  `
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        <Style>{css`
          html {
            font-family: Arial, Helvetica, sans-serif;
          }
          body {
            margin: 0;
            padding: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}</Style>
      </head>
      <body>
        <div class={wrapperClass}>
          <header class={headerClass}>
            <a href="/">Header</a>
            <a href="/create">新規作成</a>
          </header>
          <main class={mainClass}>{props.children}</main>
          <footer class={footerClass}>Footer</footer>
        </div>
      </body>
    </html>
  )
}
