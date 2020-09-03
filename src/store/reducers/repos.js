import * as type from '../actions/types';

const initialState = {
  reposList: []
}

const repos = (state = initialState, action) => {
  switch(action.type){
    default: 
      return {
        ...state
      }

    case type.GET_REPOS_SUCCESS:
      return{
        ...state, reposList: action.payload 
      }
  }
}

export default repos;