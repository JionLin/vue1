// 深拷贝
export const deepClone = (target: any) =>{
    let result: any;
    if (typeof target === 'object') {
        if (Array.isArray(target)) {
            result = []
            for (let i in target) {
                result.push(target[i])
            }
        } else if (target === null) {
            result = target
        } else if (target.constructor === RegExp) {
            result = target
        } else {
            result = {}
            for(let key in target) {
                result[key] = deepClone(target[key])
            }
        }
    } else {
        result = target
    }
    return result;
}

// 节流
let throttleTimer: any = null;
export const throttle = (func: Function, delay: number) => {
    return function (this: Event) {
        let context: any = this
        let args: any = arguments;
        if (!throttleTimer) {
            throttleTimer = setTimeout(function () {
                func.apply(context, args)
                clearTimeout(throttleTimer)
                throttleTimer = null
            }, delay)
        }

    }
}