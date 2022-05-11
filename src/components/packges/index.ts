import cContainer from './c-container/index'
import cCard from './c-card/index'
const components: Array<any> = [
    cContainer,
    cCard
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