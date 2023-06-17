import { instance1 } from '../services/index';

export const serviceBanner = async (data) => {
    const result = await instance1.get("service-banners")
    return result;
}