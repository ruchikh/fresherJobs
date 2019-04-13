const url = "http://localhost:8000/api"


export function addJobs(data, cb) {
	console.log(data)
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
      	console.log(jobs)
      	dispatch({
      		type:"GET_JOBS",
      		jobs
      	})
      });
  };
}