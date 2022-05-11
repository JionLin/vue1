<template>
    <div class="login">
        <header class="header">
            <div class="header-content">
                <div class="header-logo"></div>
            </div>
        </header>
        <section>
            <div class="login-title">
                <!-- <p>一鲸落，万物生</p>
                <p>生当似鹏起，终当如鲸落</p> -->
            </div>
            <div class="login-card">
                <div class="card-logo"></div>
                <p class="title">小标题小标题小标题小标题</p>
                <a-form :layout="layout" :model="formData" class="logo-form">
                    <a-form-item label="账号">
                        <a-input v-model:value="formData.user" placeholder="请输入账号" />
                    </a-form-item>
                    <a-form-item label="密码">
                        <a-input v-model:value="formData.pass" placeholder="请输入密码" />
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" class="login-btn" @click="loginEvent">登录</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </section>
        <footer class="login-footer">
            Copyright © 2019 - 2021 Tencent. All Rights Reserved
        </footer>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject } from 'vue';
export default defineComponent({
    setup() {
        const $r: any = (inject('$r') as any)()
        interface DataParam {
            layout: string
            formData: Object
        }
        const state: any = reactive({
            layout: 'vertical',
            formData: {
                user: '',
                pass: ''
            }
        } as DataParam)
        // const refData = toRefs(state)
        const loginEvent = () => {
            $r.router.push({
                path: '/demo'
            })
        }

        return {
            ...toRefs(state),
            loginEvent
        }
    }
})
</script>
<style lang="less" scoped>
.login{
    width: 100vw;
    height: 100vh;
    position: relative;
    background-image: url('./img/warp-bg-01.jpeg');
    background-size: cover;
    background-position: center 0;
    .header{
        // background-color: rgba(0, 0, 0, .5);
        margin-top: 30px;
        width: 100%;
        height: 64px;
        line-height: 64px;
        padding: 0px 40px;
        color: @color-fff;
        font-size: @font-size-14;
        .bs();
        position: absolute;
        top: 0px;
        left: 0px;
        &-logo{
            width: 290px;
            height: 64px;
            background-image: url('./img/logo-v5.png');
            background-size: cover;
            background-position: center center;
        }
    }
    &-title{
        font-size: 65px;
        color: @color-fff;
        font-weight: bold;
        position: absolute;
        left: 200px;
        top: calc(~'50% - 105px');
    }
    &-footer{
        width: 100%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        position: absolute;
        bottom: 30px;
        color: @color-fff;
    }
    &-card{
        width: 350px;
        height: 500px;
        background-color:rgba(255, 255, 255, .85);
        border-radius: 4px;
        position: absolute;
        right: 200px;
        top: calc(~'50% - 250px');
        box-shadow: @box-shadow;
        .bs();
        padding: 30px;
        .card-logo{
            width: 100%;
            height: 64px;
            background-image: url('./img/logo-v5.png');
            background-size: cover;
            background-position: center center;
        }
        .title{
            text-align: center;
            margin-top: 10px;
            color: @color-two;
        }
        .logo-form{
            margin-top: 50px;
            :deep(.ant-form-item-label){
                font-size: 16px;
                font-weight: 800;
                color: @primary;
            }
            :deep(.ant-input){
                background-color: transparent;
                border: none;
                border-bottom: 1px solid #aaa;
                box-shadow: none;
            }
            :deep(.el-input--medium .el-input__inner){
                border: none;
                background-color: transparent;
                font-size: 16px;
            }
            .login-btn{
                width: 100%;
                margin-top: 30px;
            }
        }
    }
    
}
</style>