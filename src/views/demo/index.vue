<template>
    <c-card>
        <div class="box">
             <div class="box1"></div>
	        <div class="box2"></div>
        </div>
   


    </c-card>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject, onMounted } from 'vue';
import { forgeEncrypt, forgeDecrypt,rsaEncrypt, rsaDecrypt} from '@/utils/tools/Encrypt'
export default defineComponent({
    setup() {
        interface DataParam {
            
        }
        const state: any = reactive({

        } as DataParam)
        onMounted(() => {
            const e = forgeEncrypt('1234')
            // const e = "wqPDhTPCkH7DjWFww4oJdsOcw7Riw7tVYMO+asOlHi8/I0RbC8KdR33CrcKGwpRMawASw6vDnsKdbcOmw6TCgDRACWfCnMOLQ8KVcsORw654w5TCtsKSwo3CrATCu3k6ZUEKwpHCi8KiwrxrCC3DjcObT8Ouw79bFMKDwrJuS8KzwrJSM8ODwqXCpMOTdMKITTvCn17CscOhwpQGwpnCtFsOTxTClMKcw7XCtEFKw70iI1HCssOnw5nDtEDDscKWw74Awo9pdcK6XsKsQV/DlEPCmC/CnH0eT8Oxw5vCkQQnC0rCuMKLfRccwp1Se8Oww4FAw5HDusOAw4cVw6dGQg3DkCHCnsKPPh0Sw5VmEcKEw7dRwrLDlEdpwqrDoMKOw7ZlewfDpgtyE8Oww67CksONwoUMwp/ClsK4wpHDogpjw7A9ZsOgScKJw4rDuBfDvcKbQcKVwpbCtsKFSMKtBVvDh8OhVU0DwpfDlcO7KsOmMsOoNU3CqSPDhsOjw77Cu8OeLxU="
            const d = forgeDecrypt(e)
            console.log('加密串：', e)
            console.log('解密得：', d)
            // console.log(rsaDecrypt(e))
        })
        return {
            ...toRefs(state),
        }
    }
})
</script>
<style scoped>
			/* .box{ height:400px;width:100%;position: relative;}
			.box1{ width:200px;height:100%; background:#0ff; position:absolute;left:0;top:0;}
			.box2{ width:100%; height:100%; background:#ff0; margin-left:200px;} */
</style>