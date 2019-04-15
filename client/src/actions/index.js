const url = "http://localhost:8000/api"


export function addJobs(data, cb) {
  return dispatch => {
    fetch(`${url}/newjob`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
      	dispatch({
      		type: "POST",
      		data
      	})
        cb(true);
      });
  };
}

export function getAllJobs() {
  return dispatch => {
    fetch(`${url}/newjob`)
      .then(res => res.json())
      .then(jobs => {
      	dispatch({
      		type:"GET_JOBS",
      		jobs
      	})
      });
  };
}




export const createUser = (data, cb) => {
    return (dispatch) => {
      fetch(`${url}/signup`, {
        method : "POST", 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      }).then(res => res.json())
      .then(data => {
          dispatch({type: 'SIGNUP_SUCCESS', data})
          cb(true)
        })
    }
  }

  export const logInAction = (data, cb) => {
    return (dispatch) => {
      fetch(`${url}/login`, {
        method : "POST", 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      }).then(res => res.json())
      .then(data => {
        if(data) {
          dispatch({type: 'LOGIN_SUCCESS', data: data.user});
          cb(true)
        } else {
          dispatch({type: 'LOGIN_ERR', data})
          cb(false)
        }
      })
    }
    
  }

  export function isLoggedIn() {
    return dispatch => {
      fetch(`/api/isLoggedIn`)
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'LOGIN_SUCCESS', data: data.user})
      })
    }
  }
  export function loggedOut(cb) {
    return dispatch => {
      fetch('/api/logout').then(res => res.json())
      .then(data => {
        dispatch({type: 'LOGOUT_SUCCESS', data})
        cb(true)
      })
    }
  }