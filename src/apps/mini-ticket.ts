// tslint:disable:no-console
import Vue from 'vue/dist/vue.common'

new Vue({
    data: {
        msg: '-',
        txid: '-',
    },
    methods: {
        buttonAction() {
            const signingService = connex.vendor.sign('tx')
            signingService
                .comment('Pay 100,000 VET to buy a ticket')

            signingService.request([{
                to: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed',
                value: '10000000000000000000',
                data: '0x',
                comment: 'Transfer 100,000 VET',
            },
            ]).then((result) => {
                this.txid = result.txid
                this.msg = 'Success!'
            }).catch((e) => {
                console.log('mini-ticket-action', e)
                this.txid = '-'
                this.msg = 'Sign transaction failed!'
            })
        },
    },
}).$mount('#mini-ticket')
