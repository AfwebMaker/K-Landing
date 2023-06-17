import { instance1 } from '../services/index';

export const newsBanner = async (data) => {
    const result = await instance1.get("app-banners")
    return result;
}