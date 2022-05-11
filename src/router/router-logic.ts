import store from '@/store'
export const breadcrumEvent = (to: any) => {
    let list: Array<Object> = []
    if (to.meta.level > 1) {
        let breadcrumList : any = (window as any).localStorage.getItem('breadcrumbList')
        if (breadcrumList) {
            list = JSON.parse(breadcrumList)
            if (list.length === to.meta.level) {
                list = list.splice(0, to.meta.level - 1)
            }
        }
    }
    list.push({
        title: to.meta.title,
        level: to.meta.level || 1,
        path: to.path
    });
    (window as any).localStorage.setItem('breadcrumbList', list);
    store.dispatch('breadcrumbEvent', list)
}