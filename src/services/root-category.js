import { instance2 } from './index';

export const rootCategory = async (data) => {
    const result = await instance2.get("mainpage/GetRootCategory")
    return result;
}