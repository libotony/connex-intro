/*!
 *
 *   reveal.js plugin using typed.js - A JavaScript Typing Animation Library
 *   Author: Peter Doherty <peter@computationhub.com>
 *   Url:
 *   License(s): MIT
 *
 */
import Typed from 'typed.js'

export function initTypedJs() {
    const typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop: true,
        startDelay: 500,
        typeSpeed: 50,
        backSpeed: 35,
    })
}
