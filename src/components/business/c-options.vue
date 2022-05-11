<template>
    <div class="c-options">
        <template v-for="(el, $index) in btnList" :key="el.key">
            <a-popconfirm
                v-if="el.type === 'popconfirm'"
                title="确认删除？"
                ok-text="确定"
                cancel-text="取消"
                @confirm="btnClick(el)"
            >
                <a-button :type="el.btnType || 'link'">{{el.label}}</a-button>
            </a-popconfirm>
            <a-button v-else :type="el.btnType || 'link'" @click="btnClick(el)">{{el.label}}</a-button>
            <label class="options-line" v-if="$index !== btnList.length - 1">|</label>
        </template>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject, computed } from 'vue';
export default defineComponent({
    name: 'c-options',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    setup(props, { emit }) {

        interface DataParam {
            
        }
        const state: any = reactive({

        } as DataParam)
        const btnList = computed(() => {
            return props.list
        })
        const btnClick = (el: any) => {
            emit(el.event, el)
        }
        return {
            ...toRefs(state),
            btnList,
            btnClick
        }
    }
})
</script>
<style lang="less" scoped>
.c-options{
    .options-line{
        color: @primary;
    }
}
</style>