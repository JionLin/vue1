class Menu {
    system: any;
    constructor (args?: any) {
        // this.system = args.system
    }
    initData () {
        if (this.system === 'FORM_WORK') {
            return this.getFormWork()
        } else {
            return []
        }
    }
    getFormWork () {
        return [
            {
                title: "首页",
                path: "/demo",
                icon: "PieChartOutlined"
            },
            {
                title: '数据展示',
                path: '/demo1',
                icon: 'FundProjectionScreenOutlined',
                children: [
                  {
                    title: '表格',
                    path: '/demo1/table'
                  }
                ]
            }
        ]
    }
}
export default Menu