import { API } from '../../config'

export const GET_DATA_PENDING = "GET_DATA_PENDING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_ERROR = "GET_DATA_ERROR";

export const POST_DATA_PENDING = "POST_DATA_PENDING";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_ERROR = "POST_DATA_ERROR";

export const getDataList = () => async dispatch => {
  try {
    dispatch({ type: GET_DATA_PENDING })

    const res = await API.getDummy();
    dispatch({ type: GET_DATA_SUCCESS, payload: res.data.data })
  } catch {
    dispatch({ type: GET_DATA_ERROR })
  }
}

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