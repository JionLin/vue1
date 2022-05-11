<template>
  <div class="c-form">
    <a-form :model="formOption.formState" v-bind="formOption.attrs">
      <a-form-item v-for="el in formOption.columns" :key="el.prop" :label="el.label">
        <template v-if="el.slot">
            <slot :name="el.prop"></slot>
        </template>
        <cInput
          v-else-if="el.type === 'input'"
          v-model:value="formOption.formState[el.prop]"
          v-bind="el.attrs"
        />
        <cSelect
          v-else-if="el.type === 'select'"
          v-model:value="formOption.formState[el.prop]"
          v-bind="el.attrs"
          :dicData="el.dicData"
        ></cSelect>
      </a-form-item>

      <!-- <a-form-item label="Field B">
        <a-input v-model:value="formState.fieldB" placeholder="input placeholder" />
      </a-form-item>-->
      <a-form-item v-if="formOption.other.isOptions">
        <div v-if="options === 'slots'" style="display: flex;">
          <slot name="options"></slot>
        </div>
        <div v-else style="display: flex;">
          <a-button type="primary">搜索</a-button>
          <a-button class="mgl-10">重置</a-button>
          <template v-if="options === 'slots-other'">
              <slot name="options"></slot>
          </template>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject, computed } from "vue";
import cInput from "./modules/input.vue";
import cSelect from "./modules/select.vue";
export default defineComponent({
  name: "c-form",
  components: { cInput, cSelect },
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  setup(props, { emit, slots }) {
    interface DataParam {
      formOption: Object;
    }
    const state: any = reactive({
      formOption: {
        other: {
            isOptions: true,
            optionsType: 'slots-other'
        },
        attrs: {
          layout: "inline",
          "label-col": { span: 6, style: { width: "70px" } },
          "wrapper-col": { span: 18 }
        },
        formState: {
          userName: "",
          sex: null
        },
        columns: [
          {
            type: "input",
            label: "用户名",
            prop: "userName",
            slot: false,
            attrs: {
              style: { width: "300px" },
              placeholder: "请输入用户名称"
            }
          },
          {
            type: "select",
            label: "性别",
            prop: "sex",
            attrs: {
              style: { width: "300px" },
              placeholder: "请选择性别"
            },
            dicData: [
              {
                label: "男",
                value: "Y"
              },
              {
                label: "女",
                value: "X"
              }
            ]
          }
        ]
      }
    } as DataParam);
    const options = computed(() => {
        if (state.formOption.other.optionsType === 'slots-other') {
            return state.formOption.other.optionsType
        } else if (slots.options) {
            return 'slots'
        } else {
            return state.formOption.other.optionsType
        }
    })
    return {
      ...toRefs(state),
      options
    };
  }
});
</script>
<style lang="less" scoped>
.c-form {
}
</style>