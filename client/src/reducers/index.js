const initState = {
	allJobs: [],
	currentUser:{}
}


export default function rootReducer(state = initState, action){
	switch(action.type){
		case "GET_JOBS":{
			return {
				...state,
				allJobs: action.jobs
			}
		}
		case "LOGIN_SUCCESS":{
			console.log(action.data)
			return{
				...state,
				currentUser: action.data
			}
		}
		default: 
		 return state
	}
}