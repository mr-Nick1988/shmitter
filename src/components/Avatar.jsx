import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";
import {useDispatch, useSelector} from "react-redux";
import {changeAvatar} from "../actions/userAction.js";

const Avatar = ({size}) => {
    const {user, changeName} = useContext(TwitterContext);
    const {avatar} = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                changeName(name);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar} alt={user.name}
        />
    );
};

export default Avatar;