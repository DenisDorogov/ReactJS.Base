import React from 'react';
import { NavLink} from 'react-router-dom';
import style from './Dialogs.module.css'


const Board = (props) => {
    return (
        <div className={style.board}>
            <NavLink to={"/dialogs" + props.path} className={style.name}>{props.name}</NavLink>
        </div>
    )
}

export default Board;