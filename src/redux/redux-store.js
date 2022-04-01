import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let reducers = combineReducers({ //подключаем редьюсеры
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers); //Создаём store
window.store = store;
console.log('store ', store);
export default store;
