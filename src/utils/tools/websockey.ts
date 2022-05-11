/*
url String ws链接地址
args Object 获取回调参数
*/

class Websockey {
    url: string
    ws: any
    lockReconnect: Boolean
    cb: any
    constructor (url: string, args: any) {
        if (Object.prototype.toString.call(url) !== '[object String]') {
            throw "链接地址必须为字符串";
        }
        if (Object.prototype.toString.call(args) !== '[object Object]') {
            throw "第二个参数必须为对象";
        }
        this.url = url
        this.ws = undefined
        // 避免重复链接
        this.lockReconnect = false;
        this.cb = args
        this._initWebSocket()
    }
    private _initWebSocket () {
        this.ws = new WebSocket(this.url);
        // 数据接收
        this.ws.onmessage = function (e: any) {
            this.cb.onMessage && this.cb.onMessage(e.data)
        }
        // ws已关闭
        this.ws.onclose = function (e: any) {
            // 需要判断是主动关闭还是被动关闭
            if(e && e.code != 1000){
				// reconnect();
			}else{
				this.cb.onClose && this.cb.onClose(e.data)
			}
        }
        // 连接成功
        this.ws.onopen = function () {
			// this.heartCheck.reset().start(this.ws);      //心跳检测重置
			this.cb.onOpen && this.cb.onOpen()
        }
        // 连接发生错误的回调方法
		this.ws.onerror = function (err: any) {
			// this.reconnect();
			// console.log('WebSocket连接发生错误',err)
			this.cb.onError && this.cb.onError()
		}
    }
    send (data: any) {
        if (this.ws.readyState === this.ws.OPEN) {
            this.ws.send(data)
        } else if (this.ws.readyState === this.ws.CONNECTING) {
            // 若是 正在开启状态，则等待1s后重新调用
			let time = setTimeout(() =>{
                this.send(data)
				clearTimeout(time)
			}, 1000)
        } else {
            throw "websockey未连接或连接超时"
        }
    }
}

export default Websockey