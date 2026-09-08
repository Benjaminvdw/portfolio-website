import { useEffect, useState } from 'react'

// Loaded on demand, once, and shared by every CodeBlock on the page.
let highlighterPromise

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = Promise.all([
      import('shiki/core'),
      import('shiki/engine/javascript'),
      import('shiki/langs/jsx.mjs'),
      import('shiki/themes/github-dark.mjs'),
    ]).then(([core, engine, jsx, theme]) =>
      core.createHighlighterCore({
        themes: [theme.default],
        langs: [jsx.default],
        engine: engine.createJavaScriptRegexEngine(),
      }),
    )
  }
  return highlighterPromise
}

export default function CodeBlock({ code, lang = 'jsx' }) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    let active = true
    getHighlighter()
      .then((h) => h.codeToHtml(code, { lang, theme: 'github-dark' }))
      .then((out) => {
        if (active) setHtml(out)
      })
    return () => {
      active = false
    }
  }, [code, lang])

  return (
    <div
      className="rounded-xl overflow-x-auto p-4 text-sm mt-5"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
