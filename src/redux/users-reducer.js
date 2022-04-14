const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGINATION = 'SET_PAGINATION';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_LOADING = 'SET_IS_LOADING';

let initialState = { 
	users: [],
	totalCount: 0,
	countOnPage: 5,
	currentPage: 1,
	isLoading: false
}


const usersReducer = (state = initialState, action) => {
	let stateCopy;
	switch (action.type) {
		case FOLLOW: {
			stateCopy = {...state};
			stateCopy.users = stateCopy.users.map(u => {
				if (u.id === action.userId) u.followed = true;
				return u;
			})
			return stateCopy;
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) return {
						...u,
						followed: false
					}
					return u;
				})
			}
		}
		case SET_USERS: {
			return {...state, users: action.newUsers};
		}
		case SET_PAGINATION: {
			return {...state, currentPage: action.numPage};
		}
		case SET_TOTAL_COUNT: {
			return {...state, totalCount: action.totalCount};
		}
		case SET_IS_LOADING: {
			return {...state, isLoading: action.isLoading};
		}
		default: return state;

	}
};

//Action creators  после рефакторинга
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, newUsers: users});
export const setUsersPagination = (page) => ({type: SET_PAGINATION, numPage: page});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_COUNT, totalCount: count});
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading: isLoading});

export default usersReducer;
   
