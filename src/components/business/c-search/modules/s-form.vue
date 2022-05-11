<template>
    
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject } from 'vue';
export default defineComponent({
    setup() {
        interface DataParam {
            
        }
        const state: any = reactive({
            
        } as DataParam)
        onMounted(() => {
           
        })
        return {
            ...toRefs(state)
        }
    }
})
</script>
<style lang="less" scoped>

</style>