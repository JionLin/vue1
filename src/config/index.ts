// 注册ant全局组件
import installAntDesignVue from '../plugins/antd/ant-design-vue'
// 注册ant图标全局组件
import installAntDesignIcon from '../plugins/antd/ant-design-icon'
// 注册自定义且不含业务逻辑的全局组件
import packges from '../components/packges/index'
// 注册基于ant二次封装的全局组件
import packgesAntd from '../components/packges-antd/index'
// 注册含业务逻辑的全局组件
import business from '../components/business/index'
// 注入全局常量
import * as $const from './constant'
// 注入全局API
import $api from '../api/index'
// 注入全局异步请求
import * as $http from '../utils/tools/http'
// 注入全局提示方法
import * as $tip from '../utils/common/tip'
// 注入全局枚举方法
import $Enum from '../utils/tools/Enum'

export default (app: any) => {
    app.mixin({
        data () {
            return {
                containerPx: $const.CONTAINER_PX
            }
        }
    })
    installAntDesignVue(app)
    installAntDesignIcon(app)
    app.use(packges)
    app.use(packgesAntd)
    app.use(business)
    app.provide('$const', $const)
    app.provide('$api', $api)
    app.provide('$http', $http)
    app.provide('$tip', $tip)
    app.provide('$Enum', $Enum)
}