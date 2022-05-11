import cContainer from './src/index.vue'
cContainer.install = function (Vue: any) {
    Vue.component(cContainer.name, cContainer)
}
export default cContainer