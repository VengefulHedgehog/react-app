import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';

const Navbar = () => {
    return (
    <nav className={c.menu}>
        <ul className={c.list}>
            <li><NavLink to='/profile' className={ navData => navData.isActive ? c.active : c.item}>Profile</NavLink></li>
            <li><NavLink to='/dialogs' className={ navData => navData.isActive ? c.active : c.item}>Messages</NavLink></li>
            <li><NavLink to='/news' className={ navData => navData.isActive ? c.active : c.item}>News</NavLink></li>
            <li><NavLink to='/music' className={ navData => navData.isActive ? c.active : c.item}>Music</NavLink></li>
            <li><NavLink to='/settings' className={ navData => navData.isActive ? c.active : c.item}>Settings</NavLink></li>
        </ul>
    </nav>
    );
}

export default Navbar;