import { callApi } from '../Service/apiCall';
import APIConstant from '../Service/apiConstants';
import { SET_SLIDING_IMAGES } from '../Constans';

export const SetSlidingImages = (searchData, global) => {
  console.log("-------------------------------")
  console.log("-------------------------------")
  console.log("-------------------------------")
  console.log("-------------------------------")
  console.log("inside SetSlidingImages")
  console.log("-------------------------------")
  console.log("-------------------------------")
  console.log("-------------------------------")
  console.log("-------------------------------")
  return callApi(APIConstant.BASE_URL + APIConstant.SLIDING_IMAGES, 'post', searchData)
    .then((res) => {
      if (res.status === 200) {
        global.dispatch(SET_SLIDING_IMAGES, res.data);
        return Promise.resolve(res.data);
      } else if (res.error) {
        return Promise.reject(res.data);
      }
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};

