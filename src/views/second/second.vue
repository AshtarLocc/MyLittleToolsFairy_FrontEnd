<template>
	<el-table
		:data="tableData"
		style="width: 100%; margin-bottom: 20px"
		row-key="id"
		border
		default-expand-all
	>
		<el-table-column prop="index" label="index" sortable />
		<el-table-column prop="filePath" label="filePath" sortable />
		<el-table-column prop="parentId" label="parentId" sortable />
		<el-table-column prop="order" label="order" sortable />
	</el-table>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getTreeMenus } from '../../http/index'
import axios from 'axios'
import TreeModel from '../../class/TreeModel'

const tableData = ref<Array<TreeModel>>()

const getTreeMenusApiRes = async () => {
	tableData.value = (await getTreeMenus()).data
}

onMounted(() => {
	getTreeMenusApiRes()
})
</script>
