import c from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={c.message}> 
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fO9ZxKHTaGSwFZ3eE4XSBJj5lDRt-oNCOA&usqp=CAU' alt="" className={c.message__img} />
            <p className={c.message__text}>{props.message}</p>
        </div>
    );
}



export default Message;