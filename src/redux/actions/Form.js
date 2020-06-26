import { API } from '../../config'

export const POST_DATA_PENDING = "POST_DATA_PENDING";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_ERROR = "POST_DATA_ERROR";

export const GET_DATA_PROVINCE_PENDING = "GET_DATA_PROVINCE_PENDING";
export const GET_DATA_PROVINCE_SUCCESS = "GET_DATA_PROVINCE_SUCCESS";
export const GET_DATA_PROVINCE_ERROR = "GET_DATA_PROVINCE_ERROR";

export const GET_DATA_DISTRICT_PENDING = "GET_DATA_DISTRICT_PENDING";
export const GET_DATA_DISTRICT_SUCCESS = "GET_DATA_DISTRICT_SUCCESS";
export const GET_DATA_DISTRICT_ERROR = "GET_DATA_DISTRICT_ERROR";

export const GET_DATA_CONSTITUSI_PENDING = "GET_DATA_CONSTITUSI_PENDING";
export const GET_DATA_CONSTITUSI_SUCCESS = "GET_DATA_CONSTITUSI_SUCCESS";
export const GET_DATA_CONSTITUSI_ERROR = "GET_DATA_CONSTITUSI_ERROR";

export const GET_DATA_VILLAGE_PENDING = "GET_DATA_VILLAGE_PENDING";
export const GET_DATA_VILLAGE_SUCCESS = "GET_DATA_VILLAGE_SUCCESS";
export const GET_DATA_VILLAGE_ERROR = "GET_DATA_VILLAGE_ERROR";



export const PostDataList = (form, cb) => async dispatch => {
  try {
    dispatch({ type: POST_DATA_PENDING })

    const res = await API.postDummy(form);
    if (res.data.message) {
      cb()
    }

    dispatch({ type: POST_DATA_SUCCESS, payload: res.data.message })
  } catch {
    dispatch({ type: POST_DATA_ERROR })
  }
}

export const getProvince = () => async dispatch => {
  try {
    dispatch({ type: GET_DATA_PROVINCE_PENDING });

    const res = await API.getProvince();
    dispatch({ type: GET_DATA_PROVINCE_SUCCESS, payload: res.data.provinsi })
  } catch {
    dispatch({ type: GET_DATA_PROVINCE_ERROR })
  }
}

export const getDistrict = (id) => async dispatch => {
  try {
    dispatch({ type: GET_DATA_DISTRICT_PENDING });

    const res = await API.getDistrict(id);
    dispatch({ type: GET_DATA_DISTRICT_SUCCESS, payload: res.data.kota_kabupaten });
  } catch {
    dispatch({ type: GET_DATA_DISTRICT_ERROR });
  }
}

export const getConstituency = (id) => async dispatch => {
  try {
    dispatch({ type: GET_DATA_CONSTITUSI_PENDING });

    const res = await API.getConstitusi(id);
    dispatch({ type: GET_DATA_CONSTITUSI_SUCCESS, payload: res.data.kecamatan })
  } catch {
    dispatch({ type: GET_DATA_CONSTITUSI_ERROR, })
  }
}

export const getVillage = (id) => async dispatch => {
  try {
    dispatch({ type: GET_DATA_VILLAGE_PENDING });

    const res = await API.getVillage(id);
    dispatch({ type: GET_DATA_VILLAGE_SUCCESS, payload: res.data.kelurahan });
  } catch {
    dispatch({ type: GET_DATA_VILLAGE_ERROR });
  }
}