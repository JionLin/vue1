import cCard from './src/index.vue'
cCard.install = function (Vue: any) {
    Vue.component(cCard.name, cCard)
}
export default cCard