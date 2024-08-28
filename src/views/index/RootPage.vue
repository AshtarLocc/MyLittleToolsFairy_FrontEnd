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
					<ThreeMenu :list="res"></ThreeMenu>
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
import { ref } from 'vue'
const res = ref([
	{
		index: '/',
		name: '一級菜單1',
		children: [
			{ index: '/first2-1', name: '二級菜單2-1', children: null },
			{ index: '/first2-2', name: '二級菜單2-2', children: null }
		]
	},
	{
		index: '/second',
		name: '一級菜單2',
		children: null
	}
])
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
</script>
