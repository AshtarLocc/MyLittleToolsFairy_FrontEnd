import { defineStore } from 'pinia'

const store = defineStore('counterStore', {
	state: () => ({
		userId: 0
	}),
	actions: {
		EditUserId(val: number) {
			this.userId = val
		}
	},
	persist: {
		key: 'site', // 在 localStorage 中的鍵名
		storage: localStorage // 使用 localStorage
	}
})
export default store
