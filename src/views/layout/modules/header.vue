<template>
  <div class="c-header">
    <div class="c-header-left">
      <breadcrumb></breadcrumb>
    </div>
    <div class="c-header-right">
      <div>
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            <UserOutlined />张三
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <div @click="loginOut">退 出</div>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
      
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, inject } from "vue";
import breadcrumb from "./breadcrumb.vue";
export default defineComponent({
  components: { breadcrumb },
  setup() {
    const state = reactive({
      collapsed: false,
      keepAliveName: []
    });
    const $r: any = (inject("$r") as any)();
    const toRefData = toRefs(state);
    onMounted(() => {});
    const loginOut = () => {
      $r.router.push({
        path: "/"
      });
    };
    return {
      ...toRefData,
      loginOut
    };
  }
});
</script>
<style lang="less" scoped>
.c-header{
    display: flex;
    align-items: center;
    // justify-content: center;
  .c-header-left{
    width: 50%;
    height: 100%;
  }
  .c-header-right {
    width: 50%;
    height: 100%;
    display: inline-block;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }
}

</style>