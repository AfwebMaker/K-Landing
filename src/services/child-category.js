import { instance2 } from './index';

export const childCategory = async (slug) => {
    const result = await instance2.get(`mainpage/GetChildCategory/${slug}`)
    return result;
}