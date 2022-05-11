import { get } from '@/utils/tools/http'
// 获取菜单
export const getMenu = (data: any, options?: any) => get('/getMenu', data, options)