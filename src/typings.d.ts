interface Reveal {
    initialize: (...args:any) => void
}

interface HighLight {
    initHighlightingOnLoad: ()=> void
    highlightBlock: (...args: any) => any
    registerLanguage: (langName: string, lang: any)=> void
}

declare module 'reveal.js' {
    const reveal: Reveal
    export = reveal
}

declare module 'highlight.js' {
    const hljs: HighLight
    export = hljs
}

declare module 'highlight.js/lib/languages/javascript' {
}

declare interface Window{
    hljs: HighLight
}

interface TweenLite{
    to: (...args:any)=>void
}
declare module 'gsap/TweenMax' {
    export const TweenLite: TweenLite
}

declare module 'vue/dist/vue.common' {
    import Vue from 'vue';
    export default Vue;
}