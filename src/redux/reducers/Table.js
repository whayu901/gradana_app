import {
  GET_TABLE_ERROR,
  GET_TABLE_SUCCESS,
  GET_TABLE_PENDING
} from '../actions';

const initialState = {
  dataTable: [],
  isLoadingTable: false,
  page: 0,
  totalPage: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TABLE_PENDING:
      return { ...state, isLoadingTable: true };
    case GET_TABLE_SUCCESS:
      return {
        ...state, isLoadingTable: false,
        dataTable: action.payload,
        page: action.page,
        totalPage: action.totalPage
      };
    case GET_TABLE_ERROR:
      return { ...state, isLoadingTable: false };
    default:
      return state;
  }
}