import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map (p => <Post key={p.id} id={p.id} message={p.message} like={p.like} dislike={p.dislike} />);

    return (
        <div className={c.myPost}>
            <h3>My posts</h3>
            <div className={c.new__post}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postsElement}
        </div>
    );
}

export default MyPosts;