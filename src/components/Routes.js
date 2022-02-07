import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile";
import BodyBox from "../components/BodyBox";

export default function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route path="/chats/:chatID?">
                    <BodyBox 
                        setMessageList = {props.setMessageList}
                        inputMessage  = {props.inputMessage}
                        setInputMessage  = {props.setInputMessage}
                        adminMessage  = {props.adminMessage}
                        messageList = {props.messageList}
                        setChatID = {props.setChatID}
                    ></BodyBox>
                </Route>
                <Route exact path="/chats">
                </Route>
            </Switch>
        </BrowserRouter>
    );
}