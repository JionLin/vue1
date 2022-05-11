import { get } from '@/utils/tools/http'
// 获取菜单
export const getUserList = (data: any, options?: any) => get('/getUserList', data, options)