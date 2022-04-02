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
    
    
    
    switch (action.type) {
        case FOLLOW: {
            return;
        }
        default: return state;
    }


};
   