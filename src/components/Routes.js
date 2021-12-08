import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile";
import App from "../components/App";

export default function Routes() {
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
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}