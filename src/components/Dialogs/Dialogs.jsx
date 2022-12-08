import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogElement = props.dialogs.map (d => <DialogItem key={d.id} id={d.id} name={d.name} ava={d.ava}/>);
    let messageElement = props.messages.map (m => <Message key={m.id} id={m.id} message={m.message} />);
    return  (
    <div className={c.dialogs}>
        <div>
            <ul className = {c.dialogs__items}>
                {dialogElement}
            </ul>
        </div>
        <div className={c.dialog__messages}>
            {messageElement}
        </div>
    </div>
    );
}

export default Dialogs;