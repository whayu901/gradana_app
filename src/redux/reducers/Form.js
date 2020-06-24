import {
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
  GET_DATA_PENDING,
  POST_DATA_PENDING,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR
} from "../actions";

const initialState = {
  dataList: [],
  isLoadingDataList: false,
  postList: '',
  isLoadingPost: false,
  postComplete: false
}

let dataList;
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_PENDING:
      return { ...state, isLoadingDataList: true };
    case GET_DATA_SUCCESS:
      dataList = [{ value: "", label: "Select Option" }];
      action.payload.map((item) => {
        dataList = [
          ...dataList,
          { value: item.id, label: item.employee_name }
        ];
        return true;
      });
      return { ...state, isLoadingDataList: false, dataList };
    case GET_DATA_ERROR:
      return { ...state, isLoadingDataList: false };
    case POST_DATA_PENDING:
      return { ...state, isLoadingPost: true, postComplete: false };
    case POST_DATA_SUCCESS:
      return { ...state, isLoadingPost: false, postComplete: true, postList: action.payload };
    case POST_DATA_ERROR:
      return { ...state, isLoadingPost: false, postComplete: false }
    default:
      return state;
  }
}