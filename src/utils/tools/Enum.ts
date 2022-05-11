interface Config {
    label?: string
    value?: string
}
export default class Enum {
    label!: string;
    value!: string;
    defaultList: object[];
    private constructor (args: Array<object>, config: Config) {
        this.defaultList = args
        this.label = 'label'
        this.value = 'value'
        if (config.value) {
            this.value = config.value
        }
        if (config.label) {
            this.label = config.label
        }
    }
    // 统一返回key和value形式
    public getFormList (): any {
        let arr: Array<Object> = []
        this.defaultList.map((el: any) => {
            arr.push({
                label: el[this.label],
                value: el[this.value]
            })
        })
    }
    // 将list数据转换为key-value
    public getMap (): any {
        let obj: any = {}
        this.defaultList.map((el: any) => {
            obj[el[this.value]] = el[this.label]
        })
    }
    // 根据value返回对应的label
    public getKeyFormLabel (key: string | number): any {
        return this.getMap()[key]
    }
    // 单纯获取value值
    public getValues () {
        return Object.values(this.getMap())
    }
    // 单纯获取key值
    public getKeys () {
        return Object.keys(this.getMap())
    }
}