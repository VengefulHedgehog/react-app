import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={c.info}>
            <img src='https://vengefulhedgehog.github.io/Summary-front-end/img/photo.jpg' alt='' />
            <div className={c.info__text}>
                <p>Жека</p>
                <p>ДР: завтра</p>
                <p>Город: Казань</p>
                <p>Образование: есть</p>
                <p>Сайт: <a href='https://vengefulhedgehog.github.io/Summary-front-end/'>Портфолио</a></p>
                <p></p>
            </div>
        </div>
    );
}

export default ProfileInfo;