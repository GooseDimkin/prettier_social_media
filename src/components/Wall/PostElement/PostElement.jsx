import style from './PostElement.module.css';

function PostElement(props) {
    return(
        <div className={style.post_section}>
            <img className={style.avatar} src={props.photos.large} alt={props.name} />
            <span className={style.label}>{props.name}</span>
            <div className={style.post}>
                <div className={style.text}>{props.text}</div>
                {props.image && <img className={style.post_image} src={props.image} alt='post' />}
            </div>
        </div>
    );
}

export default PostElement;