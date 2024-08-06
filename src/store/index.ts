import { defineStore } from "pinia"
const store = defineStore('counterStore', {
    state: () => ({
        userId:0
    }),
    actions: {
        EditUserId(val: number) {
            this.userId=val
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                // 指定key，會在本地瀏覽器存儲中生成對應的name
                key: "site",
                // 自定義存儲方式，默認使用sessionStorage
                storage: localStorage,
                // 指定要緩存的對象，默認是全部
                paths:["userId"]
            }
        ]
    }
})
export default store