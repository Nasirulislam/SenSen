import { callApi } from '../Service/apiCall';
import APIConstant from '../Service/apiConstants';
import { SET_BRAKING_NEWS_DATA, SET_BRAKING_NEWS_CATEGORIES } from '../Constans';


export const SearchNews = (searchData, global) => {
  return callApi(APIConstant.BASE_URL + APIConstant.BRAKING_NEWS, 'post', searchData)
    .then((res) => {
      if (res.status === 200) {
        // return setAsyncItem('partData', res.data).then((r) => {
        global.dispatch(SET_BRAKING_NEWS_DATA, res.data);
        return Promise.resolve(res.data);
        // });
      } else if (res.error) {
        return Promise.reject(res.data);
      }
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};
export const getCategories = (global) => {
  return callApi(APIConstant.BASE_URL + APIConstant.BRAKING_NEWS_category, 'post')
    .then((res) => {
      if (res.status === 200) {
        // return setAsyncItem('partData', res.data).then((r) => {
        global.dispatch(SET_BRAKING_NEWS_CATEGORIES, res.data);
        return Promise.resolve(res.data);
        // });
      } else if (res.error) {
        return Promise.reject(res.data);
      }
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};