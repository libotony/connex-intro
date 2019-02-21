import Reveal from 'reveal.js'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import '@/reveal-plugins/highlight'

import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'
// Theme used for syntax highlighting of code
import 'reveal.js/lib/css/zenburn.css'
import 'reveal.js/lib/js/head.min'

Reveal.initialize({})
// reveal plugins
import 'imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/marked'
import 'imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/markdown'
import 'imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/notes/notes'

hljs.initHighlightingOnLoad()
hljs.registerLanguage('javascript', javascript)
