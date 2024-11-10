import Avatar from "./Avatar.jsx";



const Navigation = ({ user, onAvatarChange }) => {
    return (
        <div className={'nav'}>
            <Avatar user={user} size={'small'} onAvatarChange={onAvatarChange} />
        </div>
    );
};

export default Navigation;




