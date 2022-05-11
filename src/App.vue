<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { defineComponent, provide, reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  setup() {
    interface DataParam {
      locale: any;
    }
    const state: any = reactive({
      locale: zhCN
    } as DataParam);
    let router = useRouter();
    let route = useRoute();
    provide("$r", () => ({ router, route }));
    return {
      ...toRefs(state)
    };
  }
});
</script>
<style lang="less">
</style>
