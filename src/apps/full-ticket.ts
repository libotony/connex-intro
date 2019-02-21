// tslint:disable:no-console
import Vue from 'vue/dist/vue.common'

// tslint:disable-next-line:max-line-length
const isXABI = { constant: true, inputs: [{ name: '_target', type: 'address' }], name: 'isX', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function' }

new Vue({
    data: {
        addr: '-',
        isXNode: false,
        msg: '-',
        txid: '-',
    },
    methods: {
        identAction() {
            const arr = new Uint8Array(20)
            crypto.getRandomValues(arr)
            let random = '0x'
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < arr.length; i++) {
                random += ('0' + arr[i].toString(16)).slice(-2)
            }
            (async () => {
                const signingService = connex.vendor.sign('cert')

                const ret = await signingService.request({
                    purpose: 'identification',
                    payload: {
                        type: 'text',
                        // tslint:disable-next-line:max-line-length
                        content: 'Connex Intro is requesting your identification with random string, choose the wallet you want to link.\r\n\r\nRandom challenge: ' + random,
                    },
                })
                this.addr = ret.annex.signer
                this.msg = 'Get identity success!'
                this.txid = ''
                const isX = connex.thor.account('0xd4dac3a95c741773F093d59256A21ED6FCc768a7').method(isXABI)
                const isXRet = await isX.call(this.addr)
                if (isXRet) {
                    this.isXNode = (isXRet.decoded as any)['0']
                }
            })().catch((e) => {
                console.log('ident action', e)
                this.addr = '-'
                this.isXNode = false
                this.txid = ''
                this.msg = 'Get identity failed!'
            })

        },
        buttonAction() {
            const price = this.isXNode ? '80,000' : '100,000'
            const signingService = connex.vendor.sign('tx')
            signingService
                .signer(this.addr)
                .comment(`Pay ${price} VET to buy a ticket`)

            signingService.request([{
                to: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed',
                value: this.isXNode ? '8000000000000000000' : '10000000000000000000',
                data: '0x',
                comment: `Transfer ${price} VET`,
            }]).then((result) => {
                this.txid = result.txid
                this.msg = 'Success!'
            }).catch((e) => {
                console.log('mini-ticket-action', e)
                this.txid = '-'
                this.msg = 'Sign transaction failed!'
            })
        },
    },
}).$mount('#full-ticket')
