import {request} from './request';

export function getHomeMultiData() {
    return request({
        //后端requestMapping的路径
        url: '/product/hello',
        method: 'post',
        data: {
            
        }
    })
}