import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import c from './Profile.module.css';

const Profile = (props) => {
    
    return (
        <div className={c.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;