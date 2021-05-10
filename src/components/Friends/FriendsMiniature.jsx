import style from './FriendsMiniature.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

function FriendsMiniature(props) {
    return(
        <div className={style.section}>
            <div className={style.label}>Друзья</div>
            {props.getFriends()}
            <NavLink to='/friends'><div className={style.show_more}>Show more...</div></NavLink>
        </div>
    );
}

export default FriendsMiniature;