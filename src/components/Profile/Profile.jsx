import style from './Profile.module.css';

function Profile(props) {
    return(
        <div className={style.section} id='myProfile'>
            <div className={style.profile_header}>
            <img className={style.avatar} src='https://sun9-64.userapi.com/impf/c850736/v850736426/6bdc3/HJ9q18meywQ.jpg?size=850x850&quality=96&sign=116ec20b8821a1316d1a9a30fae28b82&type=album' alt='avatar'/>
                <img className={style.header_image} src='https://sun9-22.userapi.com/impf/OBNpb-4mAYOhL42-pjUh6v2VYmGOQAkk_Et9yg/0LFs0JwxJZA.jpg?size=1280x1280&quality=96&sign=fb5ea79a3810f13865a65577586ec6a8&type=album' alt='header'/>
            </div>
            <div className={style.name}>Dmitry Lebedev</div>
            <div className={style.status}>Strong Junior React Front End developer | Ищу работу</div>
        </div>
    );
}

export default Profile;