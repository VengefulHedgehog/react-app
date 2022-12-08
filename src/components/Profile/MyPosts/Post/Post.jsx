import c from './Post.module.css';

const Post = (props) => {
    return  (
        <div className={c.post}>
            <img src='https://vengefulhedgehog.github.io/Summary-front-end/img/photo.jpg' alt=''/>
            <div className={c.post__text}>
                
                {props.message}
            </div>
            <div className={c.post__reaction}>
                <p>Like - {props.like}</p>
                <p>Dislike - {props.dislike}</p>
            </div>
        </div>
    );
}

export default Post;