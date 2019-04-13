const initState = {
	allJobs: []
}


export default function rootReducer(state = initState, action){
	switch(action.type){
		case "GET_JOBS":{
			console.log(action.jobs)
			return {
				...state,
				allJobs: action.jobs
			}
		}
		default: 
		 return state
	}
}