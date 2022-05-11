import cOptions from './c-options.vue'
import cForm from './c-form/index.vue'
const components: Array<any> = [
    cOptions,
    cForm
]

interface MyInstall {
    install?: any
}

const MyInstall: MyInstall = {}

MyInstall.install = function (app: any) {
    components.forEach(tpl => {
        app.component(tpl.name, tpl)
    })
}

export default MyInstall