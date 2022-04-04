const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

initialState = {
    img: "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg",
    usersList: [
        {id: 1, name: 'Victor', follow: false, location:{coutnry: 'Russia', sity: 'Moscow'}},
        {id: 2, name: 'Victor', follow: false, location:{coutnry: 'Russia', sity: 'Moscow'}},
        {id: 3, name: 'Victor', follow: false, location:{coutnry: 'Russia', sity: 'Moscow'}},
    ]

}


const usersReducer = (state = initialState, action) => {
    let stateCopy;
    
    
	switch (action.type) {
	        case FOLLOW: {
	        stateCopy = {...state};
	        stateCopy.usersList = stateCopy.usersList.map( u => {
	        	if (u.id == action.userId) u.follow = true;
	        	return u;
	        })
	        console.log('follow state: ', )
        	    return stateCopy;
        	}
        	case UNFOLLOW: {
        	stateCopy = {...state};
	        stateCopy.usersList = stateCopy.usersList.map( u => {
	        	if (u.id == action.userId) u.follow = false;
	        	return u;
	        })
	        console.log('unfollow state: ', )
        	    return stateCopy;
        	}
       	 case SET_USERS: {
        		return;
        	}
        	default: return state;
    }
};
   
