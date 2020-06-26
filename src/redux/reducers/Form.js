import {
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
  GET_DATA_PENDING,
  POST_DATA_PENDING,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
  GET_DATA_PROVINCE_PENDING,
  GET_DATA_PROVINCE_ERROR,
  GET_DATA_PROVINCE_SUCCESS,
  GET_DATA_DISTRICT_PENDING,
  GET_DATA_DISTRICT_SUCCESS,
  GET_DATA_DISTRICT_ERROR,
  GET_DATA_CONSTITUSI_ERROR,
  GET_DATA_CONSTITUSI_SUCCESS,
  GET_DATA_CONSTITUSI_PENDING,
  GET_DATA_VILLAGE_PENDING,
  GET_DATA_VILLAGE_ERROR,
  GET_DATA_VILLAGE_SUCCESS
} from "../actions";

const initialState = {
  postList: '',
  isLoadingPost: false,
  postComplete: false,
  dataProvince: [],
  isLoadProvince: false,
  dataDistrict: [],
  isLoadDistrict: false,
  dataConstitusi: [],
  isLoadConstitusi: false,
  dataVillage: [],
  isLoadVillage: false
}

let dataList;
let dataProvince;
let dataDistrict;
let dataConstitusi;
let dataVillage;
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA_PENDING:
      return { ...state, isLoadingPost: true, postComplete: false };
    case POST_DATA_SUCCESS:
      return { ...state, isLoadingPost: false, postComplete: true, postList: action.payload };
    case POST_DATA_ERROR:
      return { ...state, isLoadingPost: false, postComplete: false };
    case GET_DATA_PROVINCE_PENDING:
      return { ...state, isLoadProvince: true };
    case GET_DATA_PROVINCE_SUCCESS:
      dataProvince = [{ value: "", label: "Select Option" }];
      action.payload.map((item) => {
        dataProvince = [
          ...dataProvince,
          { value: item.id, label: item.nama }
        ];
        return true;
      })
      return { ...state, isLoadProvince: false, dataProvince };
    case GET_DATA_PROVINCE_ERROR:
      return { ...state, isLoadProvince: false };
    case GET_DATA_DISTRICT_PENDING:
      return { ...state, isLoadDistrict: true };
    case GET_DATA_DISTRICT_SUCCESS:
      dataDistrict = [{ value: "", label: "Select Option" }];
      action.payload.map((item) => {
        dataDistrict = [
          ...dataDistrict,
          { value: item.id, label: item.nama }
        ];
        return true;
      })
      return { ...state, isLoadDistrict: false, dataDistrict };
    case GET_DATA_DISTRICT_ERROR:
      return { ...state, isLoadDistrict: false };
    case GET_DATA_CONSTITUSI_PENDING:
      return { ...state, isLoadConstitusi: true };
    case GET_DATA_CONSTITUSI_SUCCESS:
      dataConstitusi = [{ value: "", label: "Select Option" }];
      action.payload.map((item) => {
        dataConstitusi = [
          ...dataConstitusi,
          { value: item.id, label: item.nama }
        ];
        return true;
      })
      return { ...state, isLoadConstitusi: false, dataConstitusi };
    case GET_DATA_CONSTITUSI_ERROR:
      return { ...state, isLoadConstitusi: false };
    case GET_DATA_VILLAGE_PENDING:
      return { ...state, isLoadVillage: true };
    case GET_DATA_VILLAGE_SUCCESS:
      dataVillage = [{ value: "", label: "Select Option" }];
      action.payload.map((item) => {
        dataVillage = [
          ...dataVillage,
          { value: item.id, label: item.nama }
        ];
        return true;
      })
      return { ...state, isLoadVillage: false, dataVillage };
    case GET_DATA_VILLAGE_ERROR:
      return { ...state, isLoadVillage: false }
    default:
      return state;
  }
}