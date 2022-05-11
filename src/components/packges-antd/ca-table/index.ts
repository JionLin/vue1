import caTable from './src/index.vue'

caTable.install = function (Vue: any) {
    Vue.component(caTable.name, caTable)
}
export default caTable