const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGINATION = 'SET_PAGINATION';

let initialState = { 
	users: [],
	totalCount: 22,
	countOnPage: 5,
	currentPage: 1
}


const usersReducer = (state = initialState, action) => {
    let stateCopy;
	switch (action.type) {
	        case FOLLOW: {
	        stateCopy = {...state}; 
	        stateCopy.users = stateCopy.users.map( u => {
	        	if (u.id == action.userId) u.followed = true;
	        	return u;
	        })
        	    return stateCopy;
        	}
        	case UNFOLLOW: {
				return {
					...state,
					users: state.users.map( u => {
						if (u.id === action.userId) return {...u, followed: false}
						return u;	
					})
				}
        	
        	}
       	 case SET_USERS: {
        		return {...state, users: [...state.users, ...action.newUsers]};
        	}
        	default: return state;
    }
};

export const toFollowActionCreator = (userId) => ({type: FOLLOW, userId})
export const toUnFollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({
	type: SET_USERS,
	newUsers: users
})
export const setUsersPaginationActionCreator = (page) => ({
	type: SET_PAGINATION, 
	numPage: page 
})

export default usersReducer;
   
