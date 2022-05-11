<template>
    <a-input v-bind="$attrs"/>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject, onMounted } from 'vue';
export default defineComponent({
    setup() {
        interface DataParam {
            
        }
        const state: any = reactive({
            
        } as DataParam)
        return {
            ...toRefs(state)
        }
    }
})
</script>
<style lang="less" scoped>

</style>