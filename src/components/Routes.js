import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Profile from "./profile/Profile";
import BodyBox from "../components/BodyBox";
import Chats from "./chats/Chats";
import Test from '../components/test';

export default function Routes(props) {
    return (

        <BrowserRouter>
            {/* <Switch> */}
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route path="/chats/:chatID?">
                    <Chats {...props} ></Chats>
                </Route>
                <Route exact path="/chats"></Route>
                <Route path="/test"><Test/></Route>
            {/* </Switch> */}
        </BrowserRouter>

    );
}