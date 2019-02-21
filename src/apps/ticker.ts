// tslint:disable:no-console
import Vue from 'vue/dist/vue.common'
import { TweenLite } from 'gsap/TweenMax'

const EventBus = new EventTarget()
const tickEvent = new Event('tick')

// tslint:disable-next-line:align
; (async () => {
    const ticker = connex.thor.ticker()
    for (; ;) {
        await ticker.next()
        EventBus.dispatchEvent(tickEvent)
    }
})().catch((e) => {
    console.log('ticker loop error', e)
})

new Vue({
    data: {
        buttonText: 'Start',
        number: '-',
        time: '-',
        score: 0,
    },
    methods: {
        buttonAction() {
            if (this.buttonText === 'Start') {
                this.buttonText = 'Stop'
                this.tickerAction()
                EventBus.addEventListener(tickEvent.type, this.tickerAction)
            } else {
                this.buttonText = 'Start'
                EventBus.removeEventListener(tickEvent.type, this.tickerAction)
            }
        },
        tickerAction() {
            connex.thor.block().get().then((blk) => {
                this.number = blk!.number.toString()
                this.time = new Date(blk!.timestamp * 1000).toLocaleString()
                TweenLite.to(this.$data, 0.5, {
                    score: blk!.totalScore,
                })
            }).catch((e) => {
                console.log('tickerAction', e)
            })
        },
    },
    computed: {
        animatedScore(): string {
            if (this.score === 0) {
                return '-'
            }
            return this.score.toFixed(0)
        },
    },
}).$mount('#ticker')
