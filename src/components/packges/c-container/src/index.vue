<template>
    <div class="c-container">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject } from 'vue';
export default defineComponent({
    name: 'c-container',
    setup() {
        interface DataParam {
        }
        const data: DataParam = {
        }
        const state: any = reactive(data)
        const refData = toRefs(state)

        return {
            ...refData,
        }
    }
})
</script>
<style lang="less" scoped>
.c-container{
    padding: 20px;
    box-shadow: @box-shadow-inset;
    border-radius: @border-radius;
    background-color: #f2f2f2;
    // 头部 尾部 填充 面包屑 面包屑下距离
    height: calc(~"100vh - 64px - 20px");
    .bs();
}
</style>