import { callApi } from '../Service/apiCall';
import APIConstant from '../Service/apiConstants';
import { SET_PRODUCT_GUIDE,SET_FAQ } from '../Constans';


export const SearchGuide = (searchData, global) => {
    return callApi(APIConstant.BASE_URL + APIConstant.PRODUCT_GUIDE_TYPE, 'post', searchData)
        .then((res) => {
            if (res.status === 200) {
                global.dispatch(SET_PRODUCT_GUIDE, res.data);
                return Promise.resolve(res.data);
            } else if (res.error) {
                return Promise.reject(res.data);
            }
        })
        .catch((e) => {
            return Promise.reject(e);
        });
};
export const getFaq = (global) => {
    return callApi(APIConstant.BASE_URL + APIConstant.FAQ, 'post')
        .then((res) => {
            if (res.status === 200) {
                global.dispatch(SET_FAQ, res.data);
                return Promise.resolve(res.data);
            } else if (res.error) {
                return Promise.reject(res.data);
            }
        })
        .catch((e) => {
            return Promise.reject(e);
        });
};