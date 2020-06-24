import { API } from '../../config'

export const GET_TABLE_PENDING = "GET_TABLE_PENDING";
export const GET_TABLE_SUCCESS = "GET_TABLE_SUCCESS";
export const GET_TABLE_ERROR = "GET_TABLE_ERROR";

export const getTable = (page) => async dispatch => {
  try {
    dispatch({ type: GET_TABLE_PENDING })

    const res = await API.tableDummy(page);
    dispatch({ type: GET_TABLE_SUCCESS, payload: res.data.data, page: res.data.currentPage })
  }
  catch {
    dispatch({ type: GET_TABLE_ERROR })
  }
}