import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import '@/reveal-plugins/highlight'
import { initTypedJs } from '@/reveal-plugins/typed'

// CSS
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'
// Theme used for syntax highlighting of code
import 'reveal.js/lib/css/zenburn.css'

// Printing and PDF exports
if (window.location.search.match(/print-pdf/gi)) {
    // tslint:disable-next-line:no-var-requires
    require('reveal.js/css/print/pdf.css')
} else {
    // tslint:disable-next-line:no-var-requires
    require('reveal.js/css/print/paper.css')
}

// Reveal plugins
import 'imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/marked'
import 'imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/markdown'
import 'imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/notes/notes'

import Reveal from 'reveal.js'
Reveal.initialize({
    history: true,
})

hljs.initHighlightingOnLoad()
hljs.registerLanguage('javascript', javascript)
initTypedJs()
