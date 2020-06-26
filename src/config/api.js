import axios from 'axios';
import Url from './url';

const host = axios.create({
  baseURL: Url.REACT_APP_HOST
});

const hostLocation = axios.create({
  baseURL: Url.REACT_APP_HOST_LOCATION
})


const api = {
  getDummy: () => host.get('dummy/employee?page=1&perPage=5'),
  tableDummy: (page) => host.get(`dummy/employee?page=${page}&perPage=5`),
  getProvince: () => hostLocation.get('provinsi'),
  getDistrict: (id) => hostLocation.get(`kota?id_provinsi=${id}`),
  getConstitusi: (id) => hostLocation.get(`kecamatan?id_kota=${id}`),
  getVillage: (id) => hostLocation.get(`kelurahan?id_kecamatan=${id}`),
  postDummy: (body) => host.post('dummy/employee', {
    ...body
  })
};

export default api;
