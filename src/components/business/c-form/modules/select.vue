<template>
    <a-select v-bind="$attrs">
        <a-select-option v-for="el in selectOption" :key="el.value" :value="el.value">{{el.label}}</a-select-option>
    </a-select>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject, onMounted, computed } from 'vue';
export default defineComponent({
    props: {
        dicData: {
            type: Array,
            default: () => []
        }
    },
    setup(props, { attrs }) {
        console.log(attrs)
        interface DataParam {
            
        }
        const state: any = reactive({
            
        } as DataParam)
        const selectOption = computed(() => props.dicData)
        return {
            ...toRefs(state),
            selectOption
        }
    }
})
</script>
<style lang="less" scoped>

</style>