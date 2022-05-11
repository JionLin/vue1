<template>
  <div class="aside-menu">
    <div class="logo"></div>
    <div class="menu-content">
      <a-menu
        mode="inline"
        theme="dark"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        @select="selectEvent"
      >
        <template v-for="el in menuList" :key="el.path">
          <a-sub-menu :key="el.path" v-if="el.children && el.children.length > 0">
            <template #icon>
              <component :is="el.icon" />
            </template>
            <template #title>{{el.title}}</template>
            <a-menu-item v-for="item in el.children" :key="item.path">{{item.title}}</a-menu-item>
          </a-sub-menu>
          <a-menu-item :key="el.path" v-else>
            <template #icon>
              <component :is="el.icon" />
            </template>
            <span>{{el.title}}</span>
          </a-menu-item>
        </template>
      </a-menu>
    </div>
    <div class="menu-btn">
      <div class="btn-content" @click="btnEvent">
        <MenuFoldOutlined v-if="!collapsed"/>
        <MenuUnfoldOutlined  v-if="collapsed"/>
        <label v-if="!collapsed" class="btn-content-text">侧边栏收起</label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, inject } from "vue";
import MenuData from "./menu-data";
export default defineComponent({
  emits: ['collapsedEvent'],
  props: {
  },
  setup(props, { emit }) {
    interface DataParam {
      selectedKeys: Array<any>,
      openKeys: Array<any>,
      preOpenKeys: Array<any>,
      menuList: Array<any>,
      collapsed: Boolean
    }
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
      preOpenKeys: [],
      menuList: [],
      collapsed: false
    } as DataParam);
    const $r: any = (inject("$r") as any)();
    const $api: any = inject('$api')
    const refData = toRefs(state);
    const selectEvent = (item: any) => {
      $r.router.push({
        path: item.selectedKeys[0]
      });
    };
    const btnEvent = () => {
      state.collapsed = !state.collapsed
      emit('collapsedEvent', state.collapsed)
    }
    const getMenu = () => {
      const men: any = new MenuData();
      $api.getMenu().then((res: any) => {
        if (res && res.responseCode === '000000' && res.result) {
          state.menuList = [...state.menuList, ...res.result]
        }
      })
    };
    onMounted(() => {
      getMenu();
      let path = $r.route.path;
      let pk = path.split("/").filter((key: any) => !!key);
      state.selectedKeys = [path];
      state.openKeys = ["/" + pk[0]];
    });
    return { ...refData, selectEvent, btnEvent };
  }
});
</script>
<style lang="less" scoped>
.aside-menu {
  height: 100vh;
  position: relative;
  .logo {
    width: 100%;
    height: 64px;
    background-image: url("../../login/img/logo-v5.png");
    background-size: cover;
    background-position: center center;
  }
  .menu-content {
    height: calc(~"100% - 64px - 80px");
    overflow-y: auto;
    overflow-x: hidden;
  }
  .menu-content::-webkit-scrollbar,
  .menu-content::-webkit-scrollbar-track-piece,
  .menu-content::-webkit-scrollbar-thumb,
  .menu-content::-webkit-scrollbar-thumb:hover {
    display: none;
  }
  .menu-btn{
    position: absolute;
    bottom: 20px;
    color: @color-fff;
    width: 100%;
    .btn-content{
      width: calc(~"100% - 40px");
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      border-radius: @border-radius;
      margin-left: 20px;
      text-align: center;
      box-shadow: @dark-bg-shadow;
      background-color: @dark-bg-two;
      overflow: hidden;
      label{
        cursor: pointer;
        margin-left: 5px;
      }
      transition: all 300ms linear 0ms;
    }
  }
}
</style>