import c from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={c.dialog__item}>
            <img src={props.ava} alt="" className={c.dialog__ava}/>
            <NavLink to={path} className={navData => navData.isActive ? c.active : c.dialog }> {props.name}</NavLink>
        </div>
    );
}
// 


export default DialogItem;