<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="200px">
				<el-menu
					active-text-color="#ffd04b"
					background-color="#545c64"
					class="el-menu-vertical-demo"
					default-active="2"
					text-color="#fff"
					@open="handleOpen"
					@close="handleClose"
					router
				>
					<ThreeMenu :list="getTreeMenusApiRes"></ThreeMenu>
				</el-menu>
			</el-aside>
			<el-container>
				<el-main><router-view></router-view></el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
import {
	Document,
	Menu as IconMenu,
	Location,
	Setting
} from '@element-plus/icons-vue'
import ThreeMenu from '../../components/TreeMenu.vue'
import { ref, onMounted } from 'vue'
import { getTreeMenus } from '../../http/index'
import TreeModel from '../../class/TreeModel'

const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}

// 定義一個TreeModel類型的ref物件用來承接getTreeMenus的查詢結果
const getTreeMenusApiRes = ref<Array<TreeModel>>([])

const getTreeMenusOnMounted = async () => {
	getTreeMenusApiRes.value = (await getTreeMenus()).data
}
onMounted(() => {
	getTreeMenusOnMounted()
})
</script>
