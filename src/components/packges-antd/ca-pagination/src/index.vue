<template>
    <a-pagination
        showQuickJumper
        showSizeChanger
        :pageSizeOptions="pageSizeOptions"
        :showTotal="showTotal"
        @change="changeEvent"
        @showSizeChange="showSizeChange"
        v-bind="$attrs"
    ></a-pagination>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs} from 'vue'
export default defineComponent({
    name: 'ca-pagination',
    setup (props, {slots}) {
        interface DataParam{
            pageSizeOptions: Array<any>
        }
        const state = reactive({
            pageSizeOptions: ['10', '20', '50', '100']
        } as DataParam)
        const changeEvent = (page: any, pageSize: any) => {
            console.log(page, pageSize)
        }
        const showSizeChange = (current: any, size: any) => {
            console.log(current, size)
        }
        const showTotal = (total: any, range: any) => {
            return `共 ${total} 条`
        }
        let refData = toRefs(state)
        return {
            ...refData,
            changeEvent,
            showSizeChange,
            showTotal
        }
    }
})
</script>
<style lang="less" scoped>
.ca-pagination{
    
}
</style>