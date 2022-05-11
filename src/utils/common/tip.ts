import { notification } from 'ant-design-vue';

let showErrorMsg: any = null;
(() => {
    let last: any = null
    let timer: any = null
    const interval: number = 3000
    showErrorMsg = (msg: string) => {
        const now: number = +new Date()
        if (now - last < interval) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                last = now
            }, interval)
        } else {
            last = now
            notification['error']({
                message: '系统提示',
                description: msg
            });
        }
    }
})()

export {
    showErrorMsg
}