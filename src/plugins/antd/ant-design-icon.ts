import {
    PieChartOutlined,
    MailOutlined,
    AppstoreOutlined,
    UserOutlined,
    DownOutlined,
    SettingOutlined,
    FundProjectionScreenOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
  } from '@ant-design/icons-vue';

const arr: Array<any> = [
    PieChartOutlined,
    MailOutlined,
    AppstoreOutlined,
    UserOutlined,
    DownOutlined,
    SettingOutlined,
    FundProjectionScreenOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
]
export default (app: any) => {
    arr.map(tpl => {
        app.component(tpl.displayName, tpl)
    })
}