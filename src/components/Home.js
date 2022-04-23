import * as React from 'react';
import {ListItemButton, ListItemText} from "@mui/material";

export default function Home() {
    return (
        <>
        <h1>Welcome to Chhhats</h1>

        <ListItemButton component="a" href="/profile">
            <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton component="a" href="/chats">
            <ListItemText primary="Chats" />
        </ListItemButton>
        <ListItemButton component="a" href="/test">
            <ListItemText primary="Test" />
        </ListItemButton>
        </>
    )

}