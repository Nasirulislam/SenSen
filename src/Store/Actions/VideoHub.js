import { callApi } from '../Service/apiCall';
import APIConstant from '../Service/apiConstants';
import { SET_VIDEO_DATA } from '../Constans';


export const SearchVideo = (searchData, global) => {
  return callApi(APIConstant.BASE_URL + APIConstant.VIDEO_HUB, 'post', searchData)
    .then((res) => {
      if (res.status === 200) {
        global.dispatch(SET_VIDEO_DATA, res.data);
        return Promise.resolve(res.data);
      } else if (res.error) {
        return Promise.reject(res.data);
      }
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};
