<template>
    <c-card>
        <template #header>
            <c-form>
                <template #userName>
                    <div style="width: 300px">
                        我是插槽插进来得
                    </div>
                </template>
                <template #options>
                    <a-button type="primary" class="mgl-10">新增1</a-button>
                </template>
            </c-form>
            <!-- <div class="tar">
                <a-button type="primary">新增1</a-button>
            </div> -->
        </template>
        <ca-table :dataSource="resultList" :columns="columns" rowKey="userId" :pagination="false">
            <template #options="{record}">
                <c-options
                    :list="btnList"
                    @editEvent="editEvent(record)"
                    @detailsEvent="detailsEvent(record)"
                    @deleteEvent="deleteEvent(record)"
                ></c-options>
            </template>
        </ca-table>
       
        <template #foolter>
            <ca-pagination :total="page.total" v-model:current="page.current" v-model:pageSize="page.pageSize"></ca-pagination>
        </template>
    </c-card>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject, onMounted } from 'vue';
export default defineComponent({
    setup() {
        interface DataParam {
            columns: Array<any>
            resultList: Array<any>
            page: Object
        }
        const state: any = reactive({
            resultList: [],
            columns: [
                {
                    title: '用户名',
                    key: 'userName',
                    dataIndex: 'userName'
                },
                {
                    title: '用户密码',
                    key: 'passCode',
                    dataIndex: 'passCode'
                },
                {
                    title: '修改时间',
                    key: 'updateDate',
                    width: 230,
                    dataIndex: 'updateDate'
                },
                {
                    title: '操作',
                    key: 'options',
                    dataIndex: 'options',
                    fixed: true,
                    width: 230,
                    align: 'center',
                    slots: { customRender: 'options' },
                }
            ],
            page: {
                total: 1000,
                current: 2,
                pageSize: 10
            },
            btnList: [
                {
                    label: '编辑',
                    key: 'edit',
                    type: 'button',
                    event: 'editEvent'
                },
                {
                    label: '详情',
                    key: 'details',
                    type: 'button',
                    event: 'detailsEvent'
                },
                {
                    label: '删除',
                    key: 'delete',
                    type: 'popconfirm',
                    event: 'deleteEvent'
                }
            ]
        } as DataParam)
        const $api: any = inject('$api')
        const getUserList = () => {
            $api.getUserList().then((res: any) => {
                if (res && res.responseCode === '000000' && res.result) {
                    state.resultList = res.result
                    state.page.total = res.total || 0
                } else {
                    state.resultList = []
                    state.page.total = 0
                }
            })
        }
        const editEvent = (el: any) => {
            console.log(el)
        }
        const detailsEvent = (el: any) => {
            console.log(el)
        }
        const deleteEvent = (el: any) => {
            console.log(el)
        }
        onMounted(() => {
            getUserList()
        })
        return {
            ...toRefs(state),
            editEvent,
            detailsEvent,
            deleteEvent
        }
    }
})
</script>
<style lang="less" scoped>

</style>