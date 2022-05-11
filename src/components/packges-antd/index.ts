import caModal from './ca-modal/index'
import caTable from './ca-table/index'
import caPagination from './ca-pagination/index'
const components: Array<any> = [
    caModal,
    caTable,
    caPagination
]

interface MyInstall {
    install?: any
}

const MyInstall: MyInstall = {}
MyInstall.install = function (Vue: any) {
    components.forEach(tpl => {
        Vue.component(tpl.name, tpl)
    })
}

export default MyInstall