import axios from 'axios';
import Url from './url';

const host = axios.create({
  baseURL: Url.REACT_APP_HOST,
});


const api = {
  getDummy: () => host.get('dummy/employee?page=1&perPage=5'),
  tableDummy: (page) => host.get(`dummy/employee?page=${page}&perPage=5`),
  postDummy: (body) => host.post('dummy/employee', {
    ...body
  })
};

export default api;
