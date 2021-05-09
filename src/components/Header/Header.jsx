import style from './Header.module.css';
import {NavLink} from 'react-router-dom';

function Header(props) {
    return(
        <div className={style.header}>
            <div className={style.content}>
                <NavLink to='home'><img className={style.logo} src='https://www.pinclipart.com/picdir/middle/529-5290605_inter-milan-logo-png-clipart-png-download-circle.png' alt='logo'/></NavLink>
                <input placeholder='Поиск' className={style.input} type='text'/>
            </div>
        </div>
    );
}

export default Header;