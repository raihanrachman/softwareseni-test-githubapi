import axios from 'axios'
import * as type from '../actions/types';

export const getRepos = ( data ) => async dispatch => {
  try {
    const res = await axios({
      method: "GET",
      url: `https://api.github.com/users/${data}/repos`,
      data
    })

    if(res.status === 200) {
      dispatch({
        payload: res.data,
        type: type.GET_REPOS_SUCCESS
      })
      
    }
  } catch(error) {
    alert("no such username")
  }
} 