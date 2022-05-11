import caModal from './src/index.vue'

caModal.install = function (Vue: any) {
    Vue.component(caModal.name, caModal)
}
export default caModal