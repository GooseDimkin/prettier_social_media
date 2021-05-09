import style from './FriendsItem.module.css';

function FriendItem(props) {
    let avatar;

    if(props.photos.small === null) 
        avatar = 'https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg';
    else 
        avatar = props.photos.small;

    return(
        <div className={style.section}>
            <div className={style.name}>{props.name}</div>
            <div className={style.status}>{props.status}</div>
            <img className={style.avatar} src={avatar} alt='avatar'/>
        </div>
    );
}

export default FriendItem;