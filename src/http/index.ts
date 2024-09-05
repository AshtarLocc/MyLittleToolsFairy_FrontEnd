import axios from 'axios'
export const getUser = (name: string, password: string) => {
	return axios.get(
		`/api/tool/user-id?userName=${name}&userPassword=${password}`
	)
}

export const getTreeMenus = () => {
	return axios.get(`/api/tool/tree-menus`)
}
