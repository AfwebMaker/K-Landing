import { instance2 } from './index';

export const randomCategory = async (data) => {
    const result = await instance2.get("mainpage/GetRandomCategory")
    return result;
}