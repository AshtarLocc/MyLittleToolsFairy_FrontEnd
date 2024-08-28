<script lang="ts" setup>
import TreeModel from '../class/TreeModel'
defineProps({
	list: Array as () => Array<TreeModel>
})
</script>

<template>
	<div v-for="item in list">
		<div v-if="item.children == null">
			<!-- 為甚麼不能用 :key="item"? -->
			<el-menu-item :index="item.index" :key="item.index">
				<el-icon>
					<Document />
				</el-icon>
				<span>{{ item.name }}</span>
			</el-menu-item>
		</div>
		<div v-else>
			<el-sub-menu :index="item.index" :key="item.index">
				<template #title>
					<el-icon>
						<Folder />
					</el-icon>
					<span>{{ item.name }}</span>
				</template>
				<TreeMenu :list="item.children"></TreeMenu>
			</el-sub-menu>
		</div>
	</div>
</template>
