<template>
	<div class="common-layout">
		<el-container>
			<el-header class="header">
				<div class="header-content">
					<img
						src="/src/assets/img/logo.png"
						alt="Fairy Logo"
						class="logo"
					/>
					<h1 class="title">MyLittleToolsFairy</h1>
				</div>
			</el-header>
			<el-container>
				<el-aside width="200px" class="aside">
					<el-menu
						active-text-color="#ffd04b"
						background-color="#fff7f0"
						class="el-menu-vertical-demo"
						default-active="2"
						text-color="#595959"
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

const getTreeMenusApiRes = ref<Array<TreeModel>>([])

const getTreeMenusOnMounted = async () => {
	getTreeMenusApiRes.value = (await getTreeMenus()).data
}
onMounted(() => {
	getTreeMenusOnMounted()
})
</script>

<style scoped>
.header {
	/* background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); */
	background: linear-gradient(135deg, #c2e812 0%, #91f5ad 100%);
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-content {
	display: flex;
	align-items: center;
}

.logo {
	width: 40px;
	height: 40px;
	margin-right: 10px;
}

.title {
	font-family: 'Caveat', cursive;
	color: #fff;
	font-size: 24px;
	font-weight: bold;
}

.aside {
	background: linear-gradient(
		135deg,
		#ff934f 0%,
		#bfcbc2 100%
	); /* 柔和的漸變色 */
	border-left: 2px solid #ffd04b; /* 精靈風的裝飾邊框 */
	box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
	padding-top: 10px;
}

.el-menu-vertical-demo {
	background-color: transparent; /* 使選單項目的背景保持透明 */
}

.el-menu-item:hover {
	background-color: #fbe9d4; /* 懸停時的柔和色 */
}

.el-menu-item.is-active {
	background-color: #ffd04b; /* 高亮選中的項目 */
}

.el-menu-item {
	font-family: 'Caveat', cursive;
	font-size: 16px;
	color: #595959;
	transition:
		background-color 0.3s ease,
		color 0.3s ease;
}
</style>
