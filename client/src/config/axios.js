import axios from 'axios';

const instance = axios.create({
  baseURL:
    import.meta.env.MODE == 'development'
      ? 'http://localhost:5000/api/v1/'
      : 'http://agument.io/api/v1/',
  withCredentials: true,
  responseType: 'json',
});

export default instance;
