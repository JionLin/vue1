
const apis: any = {}
const requireApi = require.context('./modules', true, /\.ts/)
requireApi.keys().forEach(key => {
    Object.assign(apis, { ...requireApi(key) })
})

export default {
    ...apis
}