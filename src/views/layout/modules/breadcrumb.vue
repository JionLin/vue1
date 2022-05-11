<template>
    <div class="c-breadcrumb">
        <a-breadcrumb :routes="list" class="breadcrumb">
            <template #itemRender="{ route }">
                <span>
                    {{ route.title }}
                </span>
            </template>
        </a-breadcrumb>
    </div>
    
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject, computed } from 'vue';
import { useStore} from 'vuex'
export default defineComponent({
    setup() {
        interface DataParam {
        }
        const state: any = reactive({
           
        } as DataParam)
        const store = useStore();
        const list = computed(() => {

            return store.state.breadcrumbList
        })

        const refData = toRefs(state)

        return {
            ...refData,
            list
        }
    }
})
</script>
<style lang="less" scoped>
.c-breadcrumb{
    :deep(.ant-breadcrumb) {
        color: #fff;
    }
    :deep(.ant-breadcrumb > span:last-child) {
        color: #fff;
    }
}

</style>