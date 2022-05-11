<template>
    <div :class="['c-card', isBoxShadow ? 'box-shabow' : '']">
        <div class="c-card-header">
            <slot name="header"></slot>
        </div>
        <div class="c-card-main">
            <slot></slot>
        </div>
        <div class="c-card-foolter">
            <slot name="foolter"></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject } from 'vue';
export default defineComponent({
    name: 'c-card',
    props: {
        boxShadow: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { slots }) {
        interface DataParam {
            isHeader: boolean,
            isFoolter: boolean,
            isBoxShadow: boolean
        }
        const state: any = reactive({
            isHeader: false,
            isFoolter: false,
            isBoxShadow: false
        } as DataParam)
        const refData = toRefs(state)
        state.isHeader = slots.header ? true : false
        state.isFoolter = slots.foolter ? true : false
        state.isBoxShadow = props.boxShadow
        return {
            ...refData,
        }
    }
})
</script>
<style lang="less" scoped>
.c-card{
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-radius: @border-radius;
    background-color: @default-bg;
    overflow-y: auto;
}
.c-card-header{
    margin-bottom: 20px;
}
.c-card-foolter{
    margin-top: 20px;
    text-align: right
}
.box-shabow{
 box-shadow: @box-shadow;
}
</style>