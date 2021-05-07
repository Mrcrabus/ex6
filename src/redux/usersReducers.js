const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
    //     {
    //     "id": 1,
    //     "email": "george.bluth@reqres.in",
    //     "first_name": "George",
    //     "last_name": "Bluth",
    //     "avatar": "https://reqres.in/img/faces/1-image.jpg"
    // }, {
    //     "id": 2,
    //     "email": "janet.weaver@reqres.in",
    //     "first_name": "Janet",
    //     "last_name": "Weaver",
    //     "avatar": "https://reqres.in/img/faces/2-image.jpg"
    // }
    ]
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        default:
            return state
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users})


export default userReducers;