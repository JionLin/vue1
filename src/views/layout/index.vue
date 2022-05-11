<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" collapsible :trigger="null">
      <asideMenu @collapsedEvent="bool => collapsed = bool"></asideMenu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <bHeader></bHeader>
      </a-layout-header>
      <a-layout-content class="layout-content">
        <c-container>
          <router-view v-slot="{ Component, route }">
              <keep-alive :include="keepAliveName">
                <component
                  :is="Component"
                  :key="route.path"
                />
              </keep-alive>
          </router-view>
        </c-container>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, reactive, toRefs, onMounted, inject } from 'vue'
import asideMenu from './modules/menu'
import bHeader from './modules/header'
export default defineComponent({
  components: { asideMenu, bHeader },
  setup (){
    const state = reactive({
        collapsed: false,
        keepAliveName: []
    })
    const $r = inject('$r')()
    // const $const = inject('$const')
    // state.keepAliveName = $const.KEEP_ALIVE_NAME
    const toRefData = toRefs(state)
    onMounted(()=>{
    })
    return {
      ...toRefData
    }
  }
})
</script>
<style lang="less" scoped>
.layout-content{
  background-color: @dark-bg;
  padding-right: 20px;
    // margin-bottom: 20px;
}
</style>
