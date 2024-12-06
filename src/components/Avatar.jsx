import {useDispatch, useSelector} from "react-redux";
import { changeAvatar, changeName } from '../actions/userAction.js';

const Avatar = ({ size }) => {
    const { avatar, name } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleAvatarChange = () => {
        const url = prompt('Enter new avatar url');
        dispatch(changeAvatar(url));
    };

    const handleNameChange = (e) => {
        e.preventDefault();
        const name = prompt('Enter new name');
        if (name) {
            dispatch(changeName(name));
        }
    };

    return (
        <div>
            <img
                className={`user-avatar ${size ?? ''}`}
                src={avatar}
                alt={name}
                onClick={handleAvatarChange}
                onContextMenu={handleNameChange}
            />
            <span>{name}</span>
        </div>
    );
};

export default Avatar;












