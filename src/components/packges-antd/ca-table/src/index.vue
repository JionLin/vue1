<template>
    <a-table bordered v-bind="$attrs">
        <template v-for="el in list" v-slot:[el.key]="obj">
            <slot :name="el.key" v-bind="obj"></slot>
        </template>
    </a-table>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs} from 'vue'
export default defineComponent({
    name: 'ca-table',
    setup (props, {slots}) {
        interface DataParam{
            list: Array<any>
        }
        const state = reactive({
            list: []
        } as DataParam)
        Object.keys(slots).map(key => {
            state.list.push({
                key: key
            })
        })
        let refData = toRefs(state)
        return {
            ...refData
        }
    }
})
</script>
