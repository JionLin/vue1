import caPagination from './src/index.vue'

caPagination.install = function (Vue: any) {
    Vue.component(caPagination.name, caPagination)
}
export default caPagination