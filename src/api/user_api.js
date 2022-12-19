/* eslint-disable prettier/prettier */
import apiManager from './apiManager';

export const user_login = async data => {
  try {
    const result = await apiManager({
      method:'GET',
      headers:{
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};