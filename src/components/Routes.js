import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Profile from "./profile/Profile";
import BodyBox from "../components/BodyBox";
import Chats from "./chats/Chats";

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
                    <Chats 
                        setMessageList = {props.setMessageList}
                        inputMessage  = {props.inputMessage}
                        setInputMessage  = {props.setInputMessage}
                        adminMessage  = {props.adminMessage}
                        messageList = {props.messageList}
                        setChatID = {props.setChatID}
                    ></Chats>
                </Route>
                <Route exact path="/chats">
                </Route>
            {/* </Switch> */}
        </BrowserRouter>

    );
}