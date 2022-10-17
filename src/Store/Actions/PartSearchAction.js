import { callApi } from '../Service/apiCall';
import APIConstant from '../Service/apiConstants';
import { SET_DROPDOWN_VALUES, SET_PART_DATA, SET_PART_DETAILS_DATA } from '../Constans';

export const PartDetailsById = (id, global) => {
  return callApi(APIConstant.BASE_URL + APIConstant.PART_DETAILS_BY_ID, 'post', id)
    .then((res) => {
      if (res.status === 200) {
        global.dispatch(SET_PART_DETAILS_DATA, res.data);
        return Promise.resolve(res.data);
      } else if (res.error) {
        return Promise.reject(res.data);
      }
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};
export const SearchPart = (searchData, global) => {
  return callApi(APIConstant.BASE_URL + APIConstant.SEARCH_PART_YEAR_MAKE_MODEL, 'post', searchData)
    .then((res) => {
      if (res.status === 200) {
        // return setAsyncItem('partData', res.data).then((r) => {
        global.dispatch(SET_PART_DATA, res.data);
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
export const getDropdownValues = (searchData, global) => {
  return callApi(APIConstant.BASE_URL + APIConstant.DROPDOWN_VALUES, 'post', searchData)
    .then((res) => {
      if (res.status === 200) {
        global.dispatch(SET_DROPDOWN_VALUES, res.data);
        return Promise.resolve(res.data);
      } else if (res.error) {
        return Promise.reject(res.data);
      }
    })
    .catch((e) => {
      return Promise.reject(e);
    });
    };
export const GetInterchange = (searchData, global) => {
      return callApi(APIConstant.BASE_URL + APIConstant.SEARCH_INTERCHANGE, 'post', searchData)
        .then((res) => {
          if (res.status === 200) {
            // return setAsyncItem('partData', res.data).then((r) => {
            global.dispatch(SET_PART_DATA, res.data);
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
    