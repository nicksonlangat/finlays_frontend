import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://finlays-api.techwithnick.com/`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('user_token')}`
  }
})